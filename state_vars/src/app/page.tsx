'use client'
import { useState } from "react"
import { Person } from "@/types/Person"

const Page =()=>{
  

  const [fullName, setFullName]=useState<Person>({name:' ' , lastName:''})
  return(
    <div className="w-screen h-screen">
     <div className="w-full  flex justify-center items-center">
      <input
      type="text"
      placeholder="Name"
      className="border border-black p-3 text-2xl rounded-md mb-3 "
      value={fullName.name}
      onChange={e=>setFullName({...fullName,name:e.target.value})}
      />
      <input
      type="text"
      placeholder="SubName"
      className="border border-black p-3 text-2xl rounded-md mb-3 ml-5 "
      value={fullName.lastName}
      onChange={e=>setFullName({...fullName, lastName:e.target.value})}
      />

      <p>{fullName.name} {fullName.lastName}</p>
     </div>
     </div>

  )
}
export default Page
