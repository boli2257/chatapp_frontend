import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { addMessage } from '../../utils'

export const Chatroom = ({user}) => {
    const [messages, setMessages] = useState([])
    const inputref = useRef()
    

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const text = inputref.current.value
        console.log(text);
        const message = {
            text,
            uid:user.uid,
            photoURL:user.photoURL,
            displayName:user.displayName,
            timestamp:Date.now()
        }
        await addMessage(message)
    }
  return (
    <div>

         <form onSubmit={handleSubmit}>
            <input type="text" ref={inputref}  placeholder='Írj valamit...'/>
            <button type='submit'>Küldés</button>
            </form>   

    </div>
  )
}