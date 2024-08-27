

type Props={
    conte:string
    onClick:()=>void;
}

export const CustomBotton=({conte,onClick}:Props)=>{
    return(
        <div>
            <button onClick={onClick} className="p-3 bg-violet-700 text-white rounded-md ml-6">{conte}</button>
            </div>

       
    )

}