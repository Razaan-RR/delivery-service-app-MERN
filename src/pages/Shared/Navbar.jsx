import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import useAuth from '../../hooks/useAuth'

function Navbar() {
  const { user, logOut } = useAuth()

  const handLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <div className="navbar px-10 bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/coverage">Coverage</NavLink>
              </li>

              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/coverage">Coverage</NavLink>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <button onClick={handLogout} className="btn bg-red-300">
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/login" className="btn bg-green-300">
                Login
              </NavLink>
              <NavLink to="/register" className="btn bg-blue-300">
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
