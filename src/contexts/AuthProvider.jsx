import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { AuthContext } from './AuthContext'
import { auth } from '../firebase/firebase.init'

function AuthProvider({children}) {
    const registerUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        registerUser,
        login
    }

  return (
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider