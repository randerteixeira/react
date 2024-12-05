'use client'

import { api } from "@/utils/api"
import { METHODS } from "http"
import { useRef, useState } from "react"


const Page = () => {
  const [legendInput, setLegendInput] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async () => {
    if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
      const file = fileInputRef.current.files[0]
      const data = new FormData()
      data.append('name', 'rander');
      data.append('file', file);
      const res = await api.post('/receivedfile',data,{
        headers: {
          'Content-Type': 'multipart/form-data', // Informar que o conteúdo é um FormData
        },
      })


    } else {
      alert(`arquivos do tipo  nao sao permitidos`)
    }

  }

  return (

    <div className="flex flex-col justify-center items-center m-auto h-screen mt-10">
      <h1 className="text-3xl ">Upload de Imagens</h1>
      <div className="flex flex-col m-auto mt-5 p-5 border border-black rounded-xl gap-3">
        <input type="file"
          ref={fileInputRef}
        />


        <button onClick={handleSubmit} className="p-3 m-3 bg-green-400 text-2xl border border-black">Enviar</button>
      </div>
    </div>
  )
}

export default Page