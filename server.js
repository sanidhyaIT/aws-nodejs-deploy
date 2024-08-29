const express = require("express");
const app = express();

app.get('/api/get', (req,res)=> {
    res.send({message: "hello back to nodejs"})
})

app.get('/api/get_user_details', (req,res)=> {
    res.send({
        user:{
            name: "Sanidhya",
            age:22,
        contact:123456789,
        city:"kfdk"

        }
    })
});



app.listen(8000, ()=> {
    console.log("listening to 8000")
})