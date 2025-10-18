import { useState } from 'react'
import './App.css'
import { Chatroom } from './components/Chatroom'
import { SignIn } from './components/SignIn'
import { useEffect } from 'react'
import { auth } from './firebaseApp'
import { signOut } from 'firebase/auth'

function App() {
    const [user, setUser] = useState(null)
  user && console.log(user);
  
    useEffect (()=>{
     const unsub = auth.onAuthStateChanged(setUser)
     return unsub
    },[])
  return (
      <div>
        <h1>Chatapp</h1>
        {user ? 
        <>
        <div className="user-info">
          <img src={user.photoURL} alt={user.displayName} />
          <span>{user.displayName}</span>
          <button onClick={()=>{signOut(auth)}}>Logout</button>
        </div>
        <Chatroom user={user}/>
                </>
                :
                <SignIn/>
        }
      </div>
  )
}

export default App
