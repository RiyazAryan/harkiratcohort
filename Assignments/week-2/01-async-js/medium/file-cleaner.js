const fs= require('fs')

function fileCheck(){
    const check=fs.readFile("a.txt", "utf-8",(err, data)=>{
        data=data.replace(/\s+/g,' ').trim();
        fs.writeFile("a.txt", data,(err)=>{
            if(err){
                return err;
            }
            return "Done"
        })
    })
}

fileCheck();