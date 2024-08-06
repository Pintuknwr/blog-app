

const express = require("express");
const path = require("path");
const mongoose=require("mongoose");
const cookiepaser=require("cookie-parser")

const Blog=require("./model/blog")

const userRoute=require('./routes/user');
const blogRoute=require('./routes/blog');

const { checkForAuthenticationCookie } = require("./middlewares/authentication");


const app=express();
const port = 9000;  

mongoose.connect("mongodb://localhost:27017/blog-app").then((e)=>{
    console.log("connected")
}).catch((err) => {
    console.error("Connection error", err);
});
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookiepaser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")))




app.set("view engine" , "ejs");
app.set("views",path.resolve("./views"));

app.get("/",async(req,res)=>{
    const allBlogs=await Blog.find({});
    res.render("home",{
        user : req.user,
        blogs:allBlogs,
    });
})

app.use("/user",userRoute);
app.use("/blog",blogRoute);

app.listen(port,()=>{
    console.log("server started at port " + port);
})
