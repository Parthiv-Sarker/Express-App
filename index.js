// import express...
const express = require("express");

// create express application using "express()" function.
const app = express();


// The get api have "get(route,callback())"parameters.
// And the Callback function have "calback(request,response)"parameters.
app.get("/",(req,res)=>{  
    res.send("Hello API");
})


// The listen function have "listen(port,callback())".
app.listen(8080,()=>{
    console.log("Server is running...");
})