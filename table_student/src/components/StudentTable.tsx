import { Student } from "@/types/Student"

type Props={
    students:Student[]
}

export const StudentTable =({students}:Props)=>{

    return(
        <tbody>
        {students.map(item =>(
            <tr className="border-b-4 border-indigo-400  hover:bg-sky-700 ">
              <td>
                <div className="flex">
                  <img src={item.avatar} className="w-10 h-10 rounded-full mr-3" />
                  <div className="">
                    <div className="text-xl">{item.name}</div>
                    <div className="text-sm">{item.email}</div>
                  </div>
                </div>
              </td>
              <td>{item.active&&<div className="px-2 py-1 inline-block rounded-md border border-green-700 bg-green-500 text-white">Ativo</div>}
              {!item.active&&<div className="px-2 py-1 inline-block rounded-md border border-red-700 bg-red-500 text-white">Inativo</div>} </td>
              <td className="text-center">{item.grade1}</td>
              <td className="text-center">{item.grade2}</td>
              <td className="text-center">{item.active?((item.grade1 + item.grade2) / 2).toFixed(2):'--'}</td>
            </tr>
))}
          </tbody>

    )
}