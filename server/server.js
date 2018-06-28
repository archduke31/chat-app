const path=require('path');
const express=require('express');
const app=express();
const publicPath=path.join(__dirname,'../public');

app.use(express.static(publicPath));
const port=process.env.PORT||5000;
app.listen(port,(err,res)=>{
  console.log(`Server Started ${port}`);
});
