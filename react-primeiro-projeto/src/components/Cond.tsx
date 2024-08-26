import { ReactNode } from "react"

type Props ={
    frase:string,
    author?:string,
    btnlink?:ReactNode
}

export const Cond =({frase, author,btnlink}:Props)=>{
    return(
        <div>
            <h3 className="w-96 border-red-600 p-3 text-3xl text-center italic">{frase}</h3>
            <p className="text-right text-sm">{author??'Autor Desconhecido'}<br/>{author&&'Pires do Rio:2024'}{!author&&"xx/xx/xx"} <br />{btnlink}</p>
        </div>
    )
}