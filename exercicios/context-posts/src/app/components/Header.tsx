import { useState, useContext } from "react"
import { PostContext } from "../context/PostContext"

export const Header = () => {
    const [titleInput, setTitleInput] = useState('')
    const [bodyInput, setBodyInput] = useState('')
    const postCtx= useContext(PostContext)

    const handleAddButton = () => {
        if(titleInput && bodyInput){
            postCtx?.addPost(titleInput,bodyInput)
            setTitleInput('')
            setBodyInput('')


        }


    }
 
    return (
        <header>
            <h1 className="text-3xl"> Teste</h1>

            <div className="flex flex-col m-auto w-8/12">
                <input

                    type="text"
                    name=""
                    placeholder="Digite um titulo"
                    className="border border-dotted border-gray-400 p-5 text-xl"
                    value={titleInput}
                    onChange={e => setTitleInput(e.target.value)}
                />
                <textarea
                    name=""
                    id=""
                    placeholder="Digite o Texto"
                    value={bodyInput}
                    className="text-xl"
                    onChange={e => setBodyInput(e.target.value)}
                ></textarea>
                <button
                    className="rounded-xl border-2 border-blue-600 p-5 my-10 w-28"
                    onClick={handleAddButton}
                >Adicionar </button>
                
            </div>
        </header>
    )
}