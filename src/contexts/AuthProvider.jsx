import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { AuthContext } from './AuthContext'
import { auth } from '../firebase/firebase.init'
import { GoogleAuthProvider } from 'firebase/auth'
import { useEffect, useState } from 'react'

const provider = new GoogleAuthProvider()

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    logOut,
    registerUser,
    login,
    signInWithGoogle,
  }

  return <AuthContext value={authInfo}>{children}</AuthContext>
}

export default AuthProvider
