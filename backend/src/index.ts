import express from "express"
import cors from "cors"
import { upload,seeall } from "./userApi";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({limit:'10mb',extended:true}))


app.post("/test",(req,res)=>{
    const data = req.body;
    console.log(data);
    res.status(200).json({"message":"Hello World, this is tesing api"})
})

app.use("/api/v1",upload);

app.use("/api/v1",seeall)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})