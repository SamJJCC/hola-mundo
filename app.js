//import the express module
import express from 'express';
//create an instance of an express app
const app=express();
// define a port number where the server will listen 
const PORT=3000;
// define the root path 
app.get('/',(req,res)=> {
    res.send('Hola,Mundo!');
});

// start server and listen on port 
app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});