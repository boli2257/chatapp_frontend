import { addDoc, collection, onSnapshot, orderBy, query, snapshotEqual } from "firebase/firestore";
import { db } from "./src/firebaseApp";

export const addMessage = async(message)=>{
    try {
        const docRef = collection(db,"messages")
        await addDoc(docRef,message)
    } catch (error) {
        console.log("Hiba az üzenet küldésekor", error);
        
    }
}

export const readMessages= (setMessages)=>{
     const collectionRef = collection(db, "messages")
     const q = query(collectionRef,  orderBy('timestamp'))
     const unsubscribe = onSnapshot(q,(snapshot)=>{
        const messagesArr = snapshot.docs.map((doc)=>
            ({id:doc.id, ...doc.data()}))
        setMessages(messagesArr)
     })
     return unsubscribe
}