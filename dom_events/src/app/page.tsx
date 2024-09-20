 "use client"
import { CustomBotton } from "@/components/CustomBotton"
import { FormEvent, useState } from "react"
 const Page =()=>{
 
  const [cont,setCont]=useState(0);
  const [showSecret, setShowSecret]=useState(false)
  const [nameInput, setNameInput] = useState('');
  const handleclick=(msg:string)=>alert(msg)
  const handleclick1=()=>alert('clicou no Botao 1')
  const handleclick2=()=>alert('clicou no Botao 2')
  const handleclick3=()=>alert('clicou no Botao 3')




  const handleFormSubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    alert('submit on form...')
  }




  const handleclick4=()=>{
  
    setCont(cont+1)

  }



  
  const handleClickButton=()=>{
    setShowSecret(!showSecret);

  }


  const handleBtnClick=()=>{
  
  }
  

  return (
    <div className=" w-screen h-screen flex justify-center items-center flex-col">
      <button onClick={()=>handleclick('mensagem de alerta 1')} className="p-3 bg-cyan-700 text-white rounded-md mr-6">Clicke aqui!</button>
      <button onClick={()=>handleclick('mensagem de alerta 2')} className="p-3 bg-green-700 text-white rounded-md">Clicke aqui!</button>
      <CustomBotton conte="Clicke aqui 1" onClick={handleclick1}/>
      <CustomBotton conte="Clicke aqui 2" onClick={handleclick2}/>
      <CustomBotton conte="Clicke aqui 3" onClick={handleclick3}/>
      <button className="w-50 p-3 bg-slate-600 text-blue-50 border border-yellow-400 rounded-xl" onClick={handleclick4} >{cont}</button>
      <button onClick={handleClickButton}>{showSecret?'ocultar':'mostrar'}</button>
      {showSecret&&<div className="p-3 bg-blue-500 rounded-md mt-3">Area secreta</div>}
      <div className="flex flex-col h-screen w-screen justify-center items-center">
        <h1 className="text-2xl font-bold ">Formulario de teste  </h1>
        <form action="" method="post" onSubmit={handleFormSubmit}>
          <input type="text" name="envio" id="" />
          <input type="submit" value="Enviar"/>
        </form>
        <fieldset className="border border-black p-10 mt-7">
          <legend className="font-bold text-xl">{nameInput}</legend>
        <label className="mt-10">Campo de texto</label>
        <input type="text" className="border border-black rounded-md w-1/2 p-3 text-xl" placeholder="Digite alguma coisa " value={nameInput} onChange={e=>setNameInput(e.target.value)}/>
        <button className="border border-green-900 bg-green-500 text-white text-xl rounded-md mt-4 p-3 hover:bg-green-300">Mostrar</button>
        </fieldset>
      </div>
    </div>
    
   

  )
}
export default Page