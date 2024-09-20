"use client"

import { QuestionItem } from "@/components/QuestionItem"
import { Results } from "@/components/Results"
import { questions } from "@/data/questions"
import { use, useState } from "react"

const Page = () => {
  const [answers, setAnswers] = useState<number[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const title = 'Quiz'
  const loadNextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  }

  const handleRestartButton = () => {
    setAnswers([])
    setCurrentQuestion(0)
    setShowResult(false)
  }

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl shadow shadow-gray-300">{title}</div>
        <div className="w-full h-2 bg-gray-200">
          <div className="bg-blue-500 h-2" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <div className="p-5">
          {!showResult &&
            <QuestionItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered} />
          }
          {showResult &&
            <Results questions={questions} answers={answers} />
          }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
            `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`
          }
          {showResult &&
            <button onClick={handleRestartButton} className="p-3 border-blue-900 bg-blue-400 text-xl text-white rounded-md">Reiniciar Quiz</button>
          }
        </div>
      </div>
    </div>
  )
}
export default Page
