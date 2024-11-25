import { useUser } from "@/contexts/UserContext";
import { useState } from "react"

export const NameInput = () => {
    const [nameInput, setNameInput] = useState('');
    const userCtx =useUser();
    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.code.toLowerCase()==='enter'){
            if(nameInput.trim() !== ''&& nameInput.trim() !== 'bot'){
                userCtx?.setUser(nameInput.trim());
            }
        }

    }
    return (
        <div className="mt-10">
            <p className="text-xl mb-4 ">Qual seu nome</p>
            <div className="flex gap-3 itens-center text-lg">

                <input type="text"
                    onChange={e => setNameInput(e.target.value)}
                    className=" flex-1 border border-black/30 rounded-md px-4 py-3 text-black outline-none"
                    value={nameInput}
                    onKeyUp={handleKeyUp} />


            </div>

        </div>
    )
}