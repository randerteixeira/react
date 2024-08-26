const getWeekday =()=>{
    return new Intl.DateTimeFormat('pt-br',{weekday:'long'}).format();

}




export const  Person =()=>{
    let data={
        name :"Elon Musk red ",
        avatar :"https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg",
        roles:['Ceo da tesla','Ceo da spaceX','Ceo do Twitter','Ceo da Neuralink','Ceo da Globo ']

    }


  
    return(


        <div style={{border:'1px solid black', padding:'20px'}}>
        <h1 style={{color:'red', fontSize:'30px', fontWeight:'bolder'}}>{data.name} {getWeekday()}</h1>
        <img 
        src={data.avatar} 
        alt={data.name} 
        className="w-40"/>
        <ul>
            
        <li>{data.roles[0]}</li>
        <li>{data.roles[1]}</li>
        <li>{data.roles[2]}</li>
        <li>{data.roles[3]}</li>
        
        
        
        
        </ul>
        
        
        
        
        </div>
    )








}