const path=require('path');
const express=require('express');
const http=require('http');
const socketIO=require('socket.io');
const app=express();
const publicPath=path.join(__dirname,'../public');
app.use(express.static(publicPath));
const port=process.env.PORT||5000;
const server=http.createServer(app);

var io=socketIO(server);

io.on('connection',(socket)=>{
  console.log('New User connected');
  socket.on('disconnect',()=>{
    console.log('Client disconnected');
  });
});

server.listen(port,(err,res)=>{
  console.log(`Server Started ${port}`);
});
