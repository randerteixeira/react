type Props={
    rate:number
}

export const Emoji =({rate}:Props)=>{
    if(rate>5)rate=5
    if(rate<0)rate=0
    const rateInt = Math.floor(rate)
    const stars ='⭐'.repeat(rateInt)+'😔'.repeat(5-rateInt)
    
    return(
        <div className="w-screen h-screen flex justify-center items-center bg-sky-200 text-6xl" >
           <div className="bg-slate-400 rounded-xl "> {rate.toFixed(1)}</div>
           <div className="ml-3">{stars}</div>
        </div>
    )
}