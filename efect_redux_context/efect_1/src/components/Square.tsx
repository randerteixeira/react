import { useEffect } from "react"

export const Square = () => {
    useEffect(() => {
        console.log('Conected...');

        return () => {
            console.log('Disconected')
        }
    })
return(
    <div className="w-40 h-40 m-10 bg-slate-500 rounded-es-2xl"></div>
)
}