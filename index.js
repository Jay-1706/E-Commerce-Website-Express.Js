const express = require("express")
console.log(typeof express);

const app=express()

/**
 * see a req-res cycle
 */
app.get("/", (req, res)=>{
    res.end("Hello from the Express Server!!")
})

/**
 * Starting the express server
 */
app.listen(7000,()=>{
    console.log("Server got started");
})