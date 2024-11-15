"use client"


import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { PostList } from "./components/PostList"
import { PostContext, PostProvider } from "./context/PostContext"

const Page = () => {
 

  return (
    <PostProvider>
    <div className="container w-full h-screen flex flex-col justify-between">
     <Header />
     <PostList/>

      <Footer />
    </div>
    </PostProvider>

  )

}
export default Page