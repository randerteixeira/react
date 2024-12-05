'use client'

import { Post } from "@/types/Post"
import { User } from "@/types/User"
import { api } from "@/utils/api"
import axios from "axios"
import { File } from "buffer"
import { useEffect, useRef, useState } from "react"

const Page = () => {
  const [allPosts, setAllposts] = useState<Post[]>([])
  const [titleInput, setTitleInput] = useState('')
  const [subtitleInput, setSubtitleInput] = useState('')
  const [bodyInput, setBodyInput] = useState('')
  const [selectInput, setSelectInput] = useState('')
  const [allUsers, setAllUsers] = useState<User[]>([])
  const fileInput = useRef<HTMLInputElement>(null)






  const getUsers = async () => {
    const res = await api.get('/getusers', {})
    console.log(res.data)
    setAllUsers(res.data.users)



  }





  const getPosts = async () => {
    const res = await api.get('/getallposts', {})
    setAllposts(res.data)


  }

  useEffect(() => {
    getUsers()
    getPosts()

  }, [])


  const handleAddPost = async () => {
    try {
      if (titleInput.trim() !== '' && subtitleInput.trim() !== '' && bodyInput.trim() !== '') {
        const res = await api.post('/addpost', {
          title: titleInput,
          subtitle: subtitleInput,
          body: bodyInput,
          authorId: parseInt(selectInput), // Envia apenas o ID do autor
        });

        console.log('Resposta do servidor:', res.data);

        // Limpa os campos após sucesso
        setBodyInput('');
        setSubtitleInput('');
        setTitleInput('');
        getPosts(); // Atualiza os posts
      } else {
        alert('Você deixou algum campo vazio. Revise as informações.');
      }
    } catch (error) {
      console.error('Erro ao adicionar post:');
    }
  };

  const handleDeletPost=async(id:number)=>{
    console.log(id)
    const res = await api.delete('/deletpost',{
      data:{id}
    })
    getPosts();
  }

  const handleSendFile= async ()=>{
    if ( fileInput.current?.files && fileInput.current.files.length>0){

      const file = fileInput.current.files[0]

      const data = new FormData()
      data.append('name', 'rander');
      data.append('file',file);


      const res = await api.post('/receivedfile',data)

    }
     


  }

  return (
    <div className="w-screen  flex flex-col ">
      <div className="flex flex-col w-96 gap-2 m-auto p-5 border border-black rounded-lg text-center">
        <h1 className="text-3xl">adicionando Posts</h1>

        <input type="text" value={titleInput} placeholder=" digite um titulo" onChange={e => setTitleInput(e.target.value)} />
        <input type="text" value={subtitleInput} placeholder=" digite um subtitulo" onChange={e => setSubtitleInput(e.target.value)} />
        author:
        <div className=" m-auto flex flex-wrap gap-1 ">
          <select onChange={e => setSelectInput(e.target.value)} >
            {allUsers.length > 0 ? (

              allUsers.map(item => (
                <option value={item.id}>{item.name}</option>
              ))

            ) : 'chegou nada '}

          </select>

          <textarea value={bodyInput} onChange={e => setBodyInput(e.target.value)}></textarea>
          <button className="border border-black p-3 text-sm w-40" onClick={handleAddPost}>Pegar Posts</button>

        </div>
      </div>

      <div className="flex flex-wrap m-auto">
        {allPosts.map(item => (
          <div className="min-w-12 max-w-80 flex  flex-col border border-black text-center rounded-md">
            <div className="text-xl font-bold w-full p-3 uppercase "><h1>{item.title}</h1></div>
            <div className="text-slate-500 mb-5"><h2>{item.subtitle}</h2></div>
            <div>{item.body}</div>

            <button onClick={()=>handleDeletPost(item.id)}>delet</button>


          </div>
        )
        )}




      </div>

    </div>

  )
}

export default Page