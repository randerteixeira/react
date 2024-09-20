
import { Question } from "@/types/Question"

type Props={
    questions:Question[]
    answers:number[]

}



export const Results=({questions, answers}:Props)=>{
    let correta=0
    let incorreta=0

    return(
        <div>
            {questions.map((item, key)=>(
                <div key={key} className="mb-3">
                    <div className="font-bold">{key+1}. {item.question}</div>
                    <span>{item.answer===answers[key]?`(correta)${correta++}`:`(incorreta)${incorreta++}`}</span>
                    <div>{item.options[item.answer]}</div>
                </div>
            ))}
            <div>corretas:{correta}  incorreta:{incorreta}</div>
        </div>
    )

}