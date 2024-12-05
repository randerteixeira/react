import { useQuery } from "@tanstack/react-query"
import { getAllComents, getComents} from "./api"


export const apiGetComments =(itemPage:number,startPage:number)=>{
    const queryComments = useQuery({
        queryKey:['comments',{itemPage,startPage}],
        queryFn:()=>getComents(itemPage,startPage)
    })
    return queryComments
}

export const apiGetAllComments=()=>{
    const queryComments= useQuery({
        queryKey:['allComments'],
        queryFn:getAllComents
    })
    return queryComments
}