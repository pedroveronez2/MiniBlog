import { NavLink } from 'react-router-dom';

import {useAuthentication} from '../../hook/useAuthentication'

import {useAuthValue} from '../../context/AuthContext'

function MyNavbar() {
  const { user } = useAuthValue()

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className='container'>
        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/about">about</NavLink>
            </li>
            {!user && (
              <>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/register">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
            </li>
              </>
            )}
            {user && (
            <>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/posts/create">New Post</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/deshboard">Deshboard</NavLink>
            </li>
              </>
            )}
          </ul>
        </div>
      </div>
      
    </nav>
    </>
  );
}

export default MyNavbar;
