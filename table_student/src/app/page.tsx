import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/Student";

function Page() {

  return (
    <div className="container flex justify-center items-center mt-10">
    <table className="w-full h-full ">
    <thead>

      <tr className=" text-left bg-slate-700 text-cyan-50 p-10">
        <th className="p-3">Name</th>
        <th className="p-3">Status</th>
        <th className="p-3">Grade1</th>
        <th className="p-3">Grade2</th>
        <th className="p-3">Media Final</th>
      </tr>
    </thead>
    <StudentTable students={students}/>

    </table>
    </div>


  )
} export default Page;
