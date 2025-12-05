import { Navigate } from 'react-router'
import useAuth from '../../hooks/useAuth'
import Loading from './Loading'

function PrivateRoutes({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return <Loading></Loading>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default PrivateRoutes
