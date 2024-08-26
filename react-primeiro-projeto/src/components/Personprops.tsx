const getWeekday =()=>{
    return new Intl.DateTimeFormat('pt-br',{weekday:'long'}).format();

}


type Props={
    name:string;
    avatar:string;
    roles:string[]
}

export const  Personprops =(props:Props)=>{
    const{name,avatar,roles}=props



  
    return(


        <div style={{border:'1px solid black', padding:'20px'}}>
        <h1 style={{color:'red', fontSize:'30px', fontWeight:'bolder'}}>{ name} {getWeekday()}</h1>
        <img 
        src={ avatar} 
        alt={ name} 
        className="w-40"/>
        <ul>
            
        <li>{ roles[0]}</li>
        <li>{ roles[1]}</li>
        <li>{ roles[2]}</li>
        <li>{ roles[3]}</li>
        <li>{ roles[4]}</li>
        
        
        
        
        </ul>
        
        
        
        
        </div>
    )








}