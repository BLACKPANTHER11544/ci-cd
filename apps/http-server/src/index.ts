import express from 'express'; 
import {client} from "@repo/db/client" 

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.post("/signUp",async (req,res)=>{
    const username = req.body.username ; 
    const password = req.body.password ; 
    const response = await client.user.create({
        data : {
            username , 
            password
        }
    })
    res.status(200).json({data:response});
})

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`Connected to portNumber ${PORT}`);
})