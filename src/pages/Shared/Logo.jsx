import React from 'react'
import { NavLink } from 'react-router'

function Logo() {
  return (
    <div>
      <NavLink to='/' className="btn btn-ghost text-xl flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-7 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9V6.75A2.25 2.25 0 016 4.5h7.5v6H3.75zM13.5 10.5V4.5h2.63c.6 0 1.16.27 1.53.75l2.97 3.75c.24.31.37.69.37 1.08V10.5H13.5zM5.25 18.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm12 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          />
        </svg>
        QuickDeliver
      </NavLink>
    </div>
  )
}

export default Logo
