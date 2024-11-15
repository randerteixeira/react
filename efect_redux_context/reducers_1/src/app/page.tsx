"use client"

import { listReducer } from "@/reducers/listReducer"
import { Item } from "@/types/Item"
import { useReducer, useState, useRef } from "react"




const Page = () => {

 

  const [list, dispatch] = useReducer(listReducer, []);

  const [addField, setAddFiled] = useState('')










  const handleAddButton = () => {
    if (addField.trim() === '') return false;

    dispatch({
      type: 'add',
      payload: {
        text: addField.trim()
      }
    })

    setAddFiled('')

  }
  const handleCheckBox = (id: number) => {
    dispatch({
      type: 'toogleDone',
      payload: {
        id: id
      }
    })
  }

  const handleDeleteButton = (id: number) => {
    dispatch({
      type: 'remove',
      payload: {
        id
      }
    })

  }

  const handleEditButton = (id: number) => {
    const item = list.find(it => it.id === id)

    if (!item) return false;

    const newText = window.prompt('Editar Tarefa', item.text)
    if (!newText || newText.trim() === "") return false

    dispatch({
      type: 'editText',
      payload: {
        id, newText
      }
    })

  }






  return (
    <div className="w-screen min-h-screen h-full bg-black text-white absolute top-0">
      <div className="container mx-auto mt-9">
        <h1 className="text-center text-4xl my-4">Lista de Tarefas</h1>
        <div className=" border border-white max-w-2xl mx-auto bg-slate-900 p-4 my-4 flex justify-center items-center ">
          <input type="text"
            className="border border-white p-3 bg-transparent w-96 rounded-sm my-2"
            placeholder="Digite uma tarefa"
            autoFocus
            value={addField}
            onChange={e => setAddFiled(e.target.value)}
          />
          <button
            className="p-2 border border-white text-white rounded-md mx-5 text-xl transform-cpu bg-slate-500 hover:bg-transparent"
            onClick={handleAddButton} >adicionar</button>
        </div>
        <ul>
          {list.map(item => (
            <li
              className="max-w-2xl mx-auto flex justify-between p-3 my-3 border-b border-gray-600 "
              key={item.id}>
              <div className="flex justify-center items-center">


                {!item.done ?
                  <div className="w-6 h-6 bg-red-500 rounded-full" onClick={() => handleCheckBox(item.id)}></div> : <div onClick={() => handleCheckBox(item.id)} className="w-6 h-6 bg-green-500 rounded-full"

                  ></div>}
                <p className="text-xl mx-2">{item.text}</p>
              </div>
              <div>
                <button className="mx-4 hover:text-gray-400" onClick={() => handleEditButton(item.id)}>editar</button>
                <button className="mx-4  hover:text-gray-400" onClick={() => handleDeleteButton(item.id)}>excluir</button>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>

  )
}
export default Page