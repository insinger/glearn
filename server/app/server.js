var exp=require("express");
var path=require("path");
var app=exp();
var ASSETS_FOLDER = path.join(__dirname, '/../assets');
// static content
app.use(exp.static(ASSETS_FOLDER));
// catchall for resource not found by above routes
app.use('*',function(req,res) {res.status(404).sendFile(path.join(ASSETS_FOLDER,"404.html"));});
// 4 parameters makes this a 500-series error handler
app.use('*',function(err,req,res,next) {res.status(500).sendFile(path.join(ASSETS_FOLDER,"500.html"));});
app.listen(3000,()=>console.log("listening on port 3000"));
