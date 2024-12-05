'use client'

import { apiGetAllComments, apiGetComments } from "@/utils/queries"
import { useState } from "react"

const Page = () => {
  const [atualPage, setAtualPage] = useState(0)
  const [itemPage, setItemPage]=useState(10)
  var totalComments=0
  

  const comments = apiGetComments(itemPage,atualPage*itemPage)
  const allComents = apiGetAllComments()
  if(allComents.data){

  totalComments=allComents.data?.length
  }
  const handleNextButton = () => {
    if(allComents.data){
   
      setAtualPage(atualPage + 1)
      console.log(atualPage*itemPage)
      
      


    }
    
  }



  const handleBeforeButton = () => {
    if (atualPage > 0) {
      setAtualPage(atualPage - 1)
    } else {
      setAtualPage(0)
    }

  }

  return (



    <div className="">

      <div className="flex flex-col justify-center items-center w-80 p-5 border">
        <div className="borderw-full h-11 text-center text-3xl" >{(atualPage+1)*itemPage}/{allComents.data?.length}</div>

        <div>
          <button className="border bg-orange-600 p-3 m-3 rounded-md" onClick={handleBeforeButton} disabled={atualPage === 0}>anterior</button>
          <button className=" rounded-md border bg-green-500 p-3 m-3" onClick={handleNextButton} disabled={(atualPage + 1) * itemPage >= totalComments} >próximo</button>
        </div>
        <select onChange={e=>setItemPage(parseInt(e.target.value))}>
          <option value="3">3</option>
          <option selected value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="300">300</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
        </select>

      </div>

      <ul>
        {comments.data?.map(item => (
          <li>{item.id}-{item.body}</li>
        ))}

      </ul>

    </div>
  )
}
export default Page
