
'use client'



import { Header } from "@/components/header"
import { LoggedUserProvider } from "@/contexts/LoggedUsers"

const Page =()=>{


  return(
    <>


<LoggedUserProvider>

<Header/>
</LoggedUserProvider>

</>


  )

}
export default Page

