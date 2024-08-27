 "use client"
import { CustomBotton } from "@/components/CustomBotton"
 const Page =()=>{
  const handleclick=(msg:string)=>alert(msg)
  const handleclick1=()=>alert('clicou no Botao 1')
  const handleclick2=()=>alert('clicou no Botao 2')
  const handleclick3=()=>alert('clicou no Botao 3')

  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <button onClick={()=>handleclick('mensagem de alerta 1')} className="p-3 bg-cyan-700 text-white rounded-md mr-6">Clicke aqui!</button>
      <button onClick={()=>handleclick('mensagem de alerta 2')} className="p-3 bg-green-700 text-white rounded-md">Clicke aqui!</button>
      <CustomBotton conte="Clicke aqui 1" onClick={handleclick1}/>
      <CustomBotton conte="Clicke aqui 2" onClick={handleclick2}/>
      <CustomBotton conte="Clicke aqui 3" onClick={handleclick3}/>
    </div>
   

  )
}
export default Page