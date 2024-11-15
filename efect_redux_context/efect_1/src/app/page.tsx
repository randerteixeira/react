"use client"

import { Square } from "@/components/Square"
import { useEffect, useState } from "react"

const Page = () => {
  const [name, setName] = useState(false)



  return (
    <div className="w-screen min-h-screen h-full">
      <div>{name}</div>
      {name&&<Square/>}
      <button className={`
                  m-10 
                  p-3
                border-black
                text-white text-xl
               ${name?'bg-green-600':'bg-red-500'} rounded-md`}
        onClick={() => setName(!name ? true : false)}>
        {name?'conectado':'desconectado'}</button>

        
    
    
    
    
    
    
    
    
    </div>
      
      

  )
}
export default Page