import { useQuery } from "@tanstack/react-query"
import { getComents, getPosts, getUsers } from "./api"

export const apiGetPosts = ()=>{
    const query = useQuery({
        queryKey:['posts'],
        queryFn:getPosts,
        
      })

    return query
}


export const apiGetUsers =()=>{
    const queryUsers= useQuery({
        queryKey:['users'],
        queryFn:getUsers
    })
    return queryUsers
}

export const apiGetComments =()=>{
    const queryComments = useQuery({
        queryKey:['comments'],
        queryFn:getComents
    })
    return queryComments
}