import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { postReducer } from "../reducers/postReducer";
import { Post } from "../types/Post";
import { json } from "stream/consumers";
const STORAGE_KEY = 'postContextContent'

type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void
    removePost: (id: number) => void
}

export const PostContext = createContext<PostContextType | null>(null)

export const PostProvider = ({ children }: { children: ReactNode }) => {
    const [posts, dispatch] = useReducer(postReducer,


        JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]')
    );

    const addPost = (title: string, body: string) => {
        dispatch({
            type: 'add',
            payload: {
                title,
                body
            }
        })

    }
    const removePost = (id: number) => {
        dispatch({
            type: 'remove',
            payload: { id }
        })
    }

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
    }, [posts])

    return (

        <PostContext.Provider value={{ posts, addPost, removePost }}>{children}</PostContext.Provider>

    )

}