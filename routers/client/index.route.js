const homeRoute=require("./home.route")

module.exports.index=(app)=>{
    app.use('/',homeRoute)

    app.use('/product',(req,res)=>{
        res.render('client/pages/products/index');
    });
}