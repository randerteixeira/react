import { useChat } from "@/contexts/ChatContext"
import { useUser } from "@/contexts/UserContext";

export const ChatMessages= ()=>{

const chatCtx= useChat();
const useCtx= useUser();



    return(
        <div className="flex flex-col ">
            {chatCtx?.chat.map(item=>(
                <div
                key={item.id}
                className={`border border-white/20 rounded-md p-2 text-sm mb-2
                    ${item.user === useCtx?.user?
                        ' self-end bg-white/30 text-right':
                        'self-start bg-white/5 text-left'
                    }`}
                >
                    <div className="font-bold">
                        {item.user}
                    </div>
                    <p>
                        {item.text}
                    </p>

                </div>
            ))}
        </div>

    )
}