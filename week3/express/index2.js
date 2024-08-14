const express = require("express")
const z= require("zod")

const app = express();

app.use(express.json())
const schema = z.array(z.number());
app.post("/", (req,res)=>{
    const kidneys=req.body.kidneys;
    //zod validation
    const response= schema.safeParse(kidneys);
    const klen=kidneys.length;

    res.send(response);
})


//global catch
app.use((err, req, res, next)=>{
    res.json({
        "msg":"Something went wrong, please try again"
    })
})
app.listen(3000)