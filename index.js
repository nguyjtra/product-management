const express =require('express');
const app=express();
const port=3000;
app.set('views',"./views");
app.set('view engine','pug');
app.get('/',(req,res)=>{
    res.render('client/pages/home/index');

});
app.get('/product',(req,res)=>{
    res.render('client/pages/products/index');
});
app.listen(port,()=>{
    console.log('running')
});