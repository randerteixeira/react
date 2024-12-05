
import { Comment } from "@/types/Comment";
import axios from "axios";

const api= axios.create({
    baseURL:'http://jsonplaceholder.typicode.com'
})

export const getComents = async (itemPage:number,startPage:number ):Promise<Comment[]>=>{
    const result = await api.get(`/comments?_limit=${itemPage}&_start=${startPage}`)
    return result.data


}

export const getAllComents = async ():Promise<Comment[]>=>{
    const result=  await api.get('/comments')
return result.data
}
