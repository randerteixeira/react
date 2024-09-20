import { Question } from "@/types/Question"
import { useState } from "react";

type Props={
    question:Question;
    count:number;
    onAnswer:(answer:number)=>void


}


export const QuestionItem=({question,count,onAnswer}:Props)=>{
    const [selectedAnswer,setSelectedAnswer ]=useState<number|null>(null)

    const checkQuestion=(key:number)=>{
        if(selectedAnswer===null){
            setSelectedAnswer(key)
             setTimeout(()=>{
                onAnswer(key)
                setSelectedAnswer(null)
             },2000)
            
        }


    }

    return(
        <div>
            <div className="text-3xl font-bold mb-5">{count}.{question.question}</div>
            <div>
                {question.options.map((item, key)=>(
                    <div 
                    key={key}
                    className={`border px-3 py-2 rounded-md text-lg mb-4 cursor-pointer bg-blue-100 border-blue-300 
                        ${selectedAnswer!==null?'cursor-auto':'hover:opacity-70'}
                        ${selectedAnswer!==null&& selectedAnswer=== question.answer && selectedAnswer===key&& 'bg-green-400 border-green-700'}
                        ${selectedAnswer!==null&& selectedAnswer!== question.answer && selectedAnswer===key&& 'bg-red-400 border-red-700'}
                        `}
                    onClick={()=>checkQuestion(key)}
                    
                    >
                        {item}
                    </div>
                ))}
            </div>

        </div>
    )
}