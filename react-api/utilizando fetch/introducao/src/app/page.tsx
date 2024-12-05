'use client'

import { Post } from "@/types/Post"
import { Product } from "@/types/Product"
import { Users } from "@/types/Users"
import { title } from "process"
import { useEffect, useState } from "react"

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [users, setUsers] = useState<Users[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState('carregando...')



  useEffect(() => {
    //getPost();
    setInterval(()=>{
      getUsers();
      getProduct();

    },1000)
  
  }, [])

  const getUsers = async () => {
    try {
      const res = await fetch('http://localhost:3001/getusers')
      const jsonUsers = await res.json();
      console.log(jsonUsers)
      setUsers(jsonUsers.users)

    } catch (erro) {
      setErro('erro no fetch from getUsers API')

    }

  }

  const getProduct = async () => {
    try {
      const res = await fetch('http://localhost:3001/getproduto')
      const jsonProduct = await res.json()
      console.log(jsonProduct)

      setProducts(jsonProduct.produtos)


    } catch (error) {
      setErro('erro no fetch from getProduct API')

    }
  }






  const handleAddNewPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        title: 'Poste de Teste',
        body: ' Esse e o corpo do Post aqui pode conter um texto grande para fnalidades de teste !',
        userId: 99

      })
    })
    const json = await res.json()
    console.log(json)
  }

  return (

    <div>

      <div>
        <h1 className=" text-3xl bolder ">Lista de Usuário</h1>
        {erro !== '' && <div>{erro}</div>}
        {users.length <= 0 && <div>{loading}</div>}

        {users.length > 0 &&
          <ul>

            {users.map(item => (

             <li>{item.status?<div className="w-3 h-3 rounded-full bg-green-500">.</div>:<div className="w-3 h-3 rounded-full bg-red-500">.</div>} id:{item.id} - name:{item.name} - Contact:{item.email} </li>
            ))}

          </ul>
        }
      </div>

      <div>
        <h1>Lista de Produtos</h1>
        <ul>
          {products.map(item => (
            <li>id:{item.id} produto:{item.desc}  price:{item.price}  custo:{item.custo} lucro:{(item.price - item.custo).toFixed(2)} margem: {(((item.price - item.custo) / item.price) * 100).toFixed(2)}%</li>
          ))}
        </ul>
      </div>




    </div>


  )
}
export default Page
