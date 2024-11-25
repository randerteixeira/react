import { useUser } from "@/contexts/UserContext"
import { NameInput } from "./NameInput";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

export const Chat =()=>{
   const useCtx = useUser();

   if (!useCtx)return null
   if (!useCtx.user)return <NameInput />



     return (
        <div className=" border border-white text-white">
           <div className="h-96 p-3 overflow-y-auto">
            <ChatMessages/>

           </div>
           <div className="border-t border-t-white p-3"><ChatInput name={useCtx.user}/></div>
           <div className="border-t border-t-white p-3"><ChatInput name={'Bot'}/></div>
        </div>
     )
}