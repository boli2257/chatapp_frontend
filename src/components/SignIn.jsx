import React from 'react'
import {signInWithPopup} from 'firebase/auth'
import { auth, provider } from '../firebaseApp'

export const SignIn = () => {
const handleSignIn = async()=>{
    await signInWithPopup(auth, provider)
}

  return (
    <div className='signin'>
        <h1>Jelentkezz be!</h1>
        <button onClick={handleSignIn}>Login via Google</button>
    </div>
  )
}