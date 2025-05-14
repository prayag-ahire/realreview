import { useNavigate } from "react-router-dom"
import { Button } from "./Button";

export const Landing = ()=>{

    const Navigation = useNavigate();

    return(<div className="w-full h-full flex justify-center items-center">
        <div>
            <div className="text-5xl font-bold ">#Real-Review</div>
            <div className="flex space-x-4 pt-4">
                <Button onClick={()=>{ Navigation("/add");}}>Add Property</Button>
                <Button onClick={()=>{Navigation("/all")}}>see All</Button>
            </div>
        </div>
    </div>)
}