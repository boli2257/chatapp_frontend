import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { addMessage, readMessages } from '../../utils'
import { Message } from './Message'
import { useEffect } from 'react'

export const Chatroom = ({user}) => {
    const [messages, setMessages] = useState([])
    const inputref = useRef()
    
useEffect(()=>{
  const unsubscribe=readMessages(setMessages)
  return unsubscribe
},[])



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
    <div className='all'>

           
             <div className='app'>
        {messages && messages.map(msg=><Message key={msg.id} msg={msg} currentUser={user.uid}/>)}
    </div>
    <form onSubmit={handleSubmit}>
            <input type="text" ref={inputref}  placeholder='Írj valamit...'/>
            <button type='submit'>Küldés</button>
            </form> 
    </div>
  )
}