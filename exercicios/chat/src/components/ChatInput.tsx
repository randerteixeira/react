import { useChat } from "@/contexts/ChatContext"
import { useState } from "react"

type Props={
    name:string
}

export const ChatInput=({name}:Props)=>{
    const chatCtx =useChat()
    const [textInput, setTextInput]= useState('')
    const handleKeyUp=(event:React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.code.toLowerCase()==='enter'){
            if(textInput.trim()!== ""){
                chatCtx?.addMessage(name,textInput.trim())
                setTextInput('')
            }
        }

    }
    return(
        <input type="text" 
        className="bg-transparent border-none text-white text-xl outline-none w-full" 
        placeholder={`${name}: digite uma mensagen e aperte enter`}
        value={textInput}
        onChange={e=>setTextInput(e.target.value)}
        onKeyUp={handleKeyUp}
        
        
        />
    )
}