import { useRef, useState, type ChangeEventHandler } from "react"
import { Button } from "./Button"
import axios from "axios"

const Label = ({children}:{children:React.ReactNode})=>{
    return(
    <div>
        <div className="font-bold">{children}</div>
    </div>
)}

const Input = ({type,onChange}:{onChange?:ChangeEventHandler<HTMLInputElement>,type:React.HTMLInputTypeAttribute})=>{
    return(<div className="border-2 w-fit">
        <input type={type} onChange={onChange} className="w-full"></input>
    </div>)
}


export const AddProperty = ()=>{

    const [imgBase,setImgBase] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [location,setLocation] = useState<string | null>("");

    const addimage = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0];
        
        if(file){
            const reader = new FileReader();
            reader.onload = (e)=>{
                setImgBase(e.target?.result as string)
            }
            reader.readAsDataURL(file);
        }
    }

    const clickevent = ()=>{
        fileInputRef.current?.click();
    }

    const handler = async()=>{
        const res = await axios.post("http://localhost:3000/api/v1/upload",{
            image:imgBase.toString(),
            location,
            time:new Date().toLocaleString(),   
            userid:2
        });
        console.log(res);
        alert("data uploaded");
    }

    return(<div className="w-screen h-screen">
        <div className="flex  justify-center items-center h-full">
            <div className="border-2 p-4">
                <div >
                    {imgBase && (<img  className="w-64 h-64 object-cover m-2 border rounded"  id="preview" src={imgBase}/>)}
                    <input ref={fileInputRef}  type="file" accept="image/*" onChange={addimage} hidden></input>
                    <Button  onClick={clickevent}>upload Image</Button>
                </div>
                <div className="w-full">
                    <Label>Location</Label>
                    <Input onChange={(e)=>{setLocation(e.target.value)}} type="text"/>
                </div>
                <div className="flex justify-center p-2">
                    <Button onClick={handler}>upload</Button>
                </div>
            </div>
        </div>
    </div>)
}