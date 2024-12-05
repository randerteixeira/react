import { Comment } from "@/types/Comment"
import { Post } from "@/types/Post"
import { User } from "@/types/User"
import axios from "axios"

const api =axios.create({
    baseURL:'http://jsonplaceholder.typicode.com'
})

export const getPosts = async():Promise<Post[]>=>{

   
        const result = await api.get('/posts')
        return result.data
        
      

    
}



export const getUsers = async():Promise<User[]>=>{
    const result = await api.get('/users')
    return result.data
}



export const getComents = async ( ):Promise<Comment[]>=>{
    const result = await api.get('/comments')
    return result.data


}