'use client'

import { ChatProvider } from "@/contexts/ChatContext"
import { UserProvider } from "@/contexts/UserContext"
import { Chat } from "@/components/Chat"

const Page =()=>{
  return(
    <div className="w-screen h-screen bg-black text-white">
    <div className="container mx-auto max-w-lg px-2 h-screen bg-black">
      <UserProvider>
        <ChatProvider>
          <h1 className="text-3xl my-3 text-center ">Chat Simples

          </h1>

          <Chat/>
        </ChatProvider>
      </UserProvider>
     
    </div>
    </div>
  )
}
export default Page