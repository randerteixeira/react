import { LoggedUserContext } from "@/contexts/LoggedUsers"
import { useContext } from "react"

export const Header=()=>{
    const loggedUserCtx = useContext(LoggedUserContext)
    const handleLogoff=()=>{
       loggedUserCtx?.setName('')
    }
    return(
        <header>
            <h1 className="text-3xl border-l">Cabecalho da página</h1>
            {loggedUserCtx?.name &&
            <>
            <p>Usuario Logado :{loggedUserCtx?.name}</p>
             <button onClick={handleLogoff}>Sair</button>
             </>

            
            
            }{(!loggedUserCtx?.name ||loggedUserCtx.name=='')&&
                <p>Usuario deslogado</p>
                

            }
           


        </header>
    )
}