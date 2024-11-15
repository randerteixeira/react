import { useContext } from "react"
import { PostContext } from "../context/PostContext"
export const PostList = () => {
    const postCtx = useContext(PostContext)
    return (
        <div className="container w-screen flex m-auto border-t-2 border-b-2 flex-wrap">
            {postCtx?.posts.map(item => (
                <div className="border bg-slate-500 text-xl rounded-lg m-3 p-3" key={item.id}>
                    <div className="text-center w-full text-2xl font-bold my-3">{item.title}</div>
                    <div>{item.body}</div>
                    <button 
                    className="p-3 rounded-sm border-2 border-red-500"
                    onClick={()=>postCtx.removePost(item.id)}>[Delete]</button>
                </div>

            ))}
        </div>
    )

}