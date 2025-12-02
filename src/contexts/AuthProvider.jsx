import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { AuthContext } from './AuthContext'
import { auth } from '../firebase/firebase.init'
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

function AuthProvider({children}) {
    const registerUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        registerUser,
        login,
        signInWithGoogle
    }

  return (
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider