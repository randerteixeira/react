import { Circle } from "./Circle";
import { Square } from "./Square";
import { Triangle } from "./Triangle";
import { Retangle } from "./Retangle";


export const Geometric=()=>{
    return(
        <div>
            <h3 className="text-2xl font-bold">Formas Geometricas...</h3>

            <div className="flex gap-2 border-2 p-3">
                <Square/>
                <Circle/>
                <Triangle/>
                <Retangle/>



            </div>




        </div>
    )
}
