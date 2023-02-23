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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<NotFound />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
