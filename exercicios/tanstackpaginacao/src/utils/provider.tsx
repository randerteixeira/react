'use client'
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { queryClient } from "./queryClient"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

type Props={
    children:ReactNode
}

export const Provider= ({children}:Props)=>{
    return (
        <QueryClientProvider client={queryClient}>

            {children}
            <ReactQueryDevtools/>
        </QueryClientProvider>
    )

}