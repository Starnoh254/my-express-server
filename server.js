const express = require('express');
const app = express();

app.get("/",(req , res)=>{
    // console.log(req);
    res.send("Hello Starnoh")

})

app.get("/about",(req,res) =>{
    res.send("My name is Starnoh John")
})

app.get("/contact",(req , res)=>{
    res.send("Contact me at : stajohn697@gmail.com")
})

app.get("/hobbies",(req , res)=>{
    res.send("I love coding")
})

app.listen(3000 , function(){
    console.log("Server is running on port 3000");
});