const express =require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send('trang chu');
    
});
app.get('/product',(req,res)=>{
    res.send('dssp')
});
app.listen(port,()=>{
    console.log('running')
});