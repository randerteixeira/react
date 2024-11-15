import { PostContext } from "../context/PostContext"
import { useContext } from "react"



export const Footer = ()=>{

    const postCtx = useContext(PostContext)
return (
    <div className="w-screen bg-slate-500 flex justify-center items-center text-white">Total de Posts :{postCtx?.posts.length}</div>
)

}