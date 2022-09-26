const express=require("express")
const app=express()

require("../src/db/connection")
// const cors=require("cors")

// app.use(cors())


const router=require("./routers/routes")

app.use(express.json())
app.use(router)

//  const MenRanking=require('./models/schema_for_data')






const port=process.env.PORT||5000


// const cors=require("cors")
// app.use(
//     cors({
//         origin:"*",
//         methods:["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
//         credentials:true
//     })
// )



// const cors=require("cors");
// const corsOptions ={
//    origin:'*', 
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }

// app.use(cors(corsOptions)) // Use this after the variable declaration



















app.listen(port,()=>{
    console.log("connection established at port:",port)
})