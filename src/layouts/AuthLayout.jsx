import { Outlet } from "react-router"
import Logo from "../pages/Shared/Logo"

function AuthLayout() {
  return (
    <div>
        <Logo></Logo>
        <Outlet></Outlet>
    </div>
  )
}

export default AuthLayout