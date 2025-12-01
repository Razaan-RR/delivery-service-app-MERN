import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9V6.75A2.25 2.25 0 016 4.5h7.5v6H3.75zM13.5 10.5V4.5h2.63c.6 0 1.16.27 1.53.75l2.97 3.75c.24.31.37.69.37 1.08V10.5H13.5zM5.25 18.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm12 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            />
          </svg>

          <p className="font-semibold text-lg">
            QuickDeliver
            <br />
            <span className="text-sm text-gray-400">
              Fast • Reliable • Doorstep Delivery
            </span>
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Contact</a>
        </nav>

        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Track Order</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">

            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616 3c-2.72 0-4.924 2.205-4.924 4.923 0 .386.045.762.127 1.124C7.728 8.89 4.1 6.93 1.671 3.95a4.93 4.93 0 00-.666 2.475c0 1.708.87 3.213 2.19 4.096a4.904 4.904 0 01-2.229-.616v.06c0 2.385 1.693 4.374 3.946 4.827a4.936 4.936 0 01-2.224.084c.63 1.953 2.445 3.376 4.6 3.415A9.867 9.867 0 010 19.54 13.94 13.94 0 007.548 21.75c9.142 0 14.308-7.721 14.308-14.414 0-.22-.005-.439-.016-.657A10.166 10.166 0 0024 4.557z" />
              </svg>
            </a>

            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16.5v-9l7.5 4.5L9 16.5z" />
              </svg>
            </a>

            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8H6v4h3v12h5V12h3.6l.4-4H14V7c0-.9.2-1.3 1.1-1.3h2.9V1h-3.8C10.7 1 9 2.6 9 5.6V8z" />
              </svg>
            </a>

          </div>
        </nav>
      </footer>
    </div>
  )
}

export default Footer
