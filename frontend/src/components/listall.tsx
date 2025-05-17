import axios from "axios"
import { useEffect, useState } from "react"

interface Data {
    location:string,
    time:string,
    userId:number,
    image:string
}
export const  ListAll = ()=>{
const [data,setData] = useState<Data[] | null>(null);
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.get("http://localhost:3000/api/v1/all");
            const ans = await res.data;
            setData(ans);
            console.log("get data");
        }
        fetchData();
    },[])
    return(<div className="w-screen h-screen ">
        <p className="w-full flex justify-center font-bold p-4 text-4xl">This is all data</p>
        <div className="grid grid-cols-3 ml-30 justify-around">
        {data && data.map((x)=>(<div className="border-2 w-fit h-fit mb-10 ">
            <img className="w-64 h-64 object-cover m-2 border rounded"  src={x.image}></img>
            <p>Time : {x.time}</p>
            <div>userId : {x.userId}</div>
            <div>location : {x.location}</div>
        </div>))}
        </div>
    </div>)
}