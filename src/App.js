import './App.css'; 
// import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    return <p>Loading...</p>
  }


  console.log(user)
  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
        <MyNavbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='*' element={<NotFound />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/posts/create' element={<CreatePost />}/>
            <Route path='/deshboard' element={<Dashboard />}/>
          </Routes>
        <MyFooter />
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
