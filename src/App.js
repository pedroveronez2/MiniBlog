import './App.css'; 
// import react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import components
import MyNavbar from './components/MyNavbar'
// import Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import MyFooter from './components/MyFooter';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
// context
import { AuthProvider } from './context/AuthContext';
// firebase
import { onAuthStateChanged } from 'firebase/auth';
// hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hook/useAuthentication';
import Dashboard from './pages/Dashboard/Dashboard';
import CreatePost from './pages/CreatePost/CreatePost';
import Spinner from './components/Spinner';

function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if (loadingUser) {
    return <Spinner />
  }


  console.log(user)
  return (
      
      <AuthProvider value={{ user }}>
        <BrowserRouter>
        <MyNavbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='*' element={<NotFound />}/>
            <Route path='/register' element={!user ? <Register />: <Navigate to="/" />}/>
            <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />}/>
            <Route path='/posts/create' element={user ?<CreatePost />: <Navigate to="/login" />}/>
            <Route path='/deshboard' element={user ? <Dashboard /> : <Navigate to="/login"/>}/>
          </Routes>
        <MyFooter />
        </BrowserRouter>
      </AuthProvider>
      


   
  );
}

export default App;
