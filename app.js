const express = require('express')
const ejs = require('ejs')
const _ = require("lodash")
const dbConn = require("./database/dbConn")
const dotenv = require("dotenv")
const blogRoute = require("./routes/blougRoute")


const app = express()

dotenv.config()

//ejs initialization
app.set('view engine', 'ejs')
app.use(express.static('public'))


//route to different pages

//displays the home page in the website
app.get("/", (req, res) => {
    res.render("index",{
        active : "home"
    })
})

//displays about us page in the website
app.get("/aboutUs", (req, res) => {
    res.render("aboutUs",{
        active : "about"
    })
})

//
app.use("/blog",blogRoute)

//displays events us page in the website
app.get("/events", (req, res) => {
    res.render("events",{
        active : "events"
    })
})

//displays photoGallery us page in the website
app.get("/photoGallery", (req, res) => {
    res.render("photoGallery",{
        active : "photo"
    })
})

//displays recommendation us page in the website
app.get("/recommendation", (req, res) => {
    res.render("recommendation",{
        active : "recom"
    })
})

//displays the research page
app.get("/research",(req,res) => {
    res.render("research",{
        active : "research"
    })
})


//routes for form fill up
app.get("/reservation",(req,res)=>{
    res.render("reservation",{
        active : "form-reser"
    })
})
app.get("/registration",(req,res)=>{
    res.render("registration",{
        active : "form-regis"
    })
})

app.get("/yoga",(req,res)=>{
    res.render("yoga",{
        active : "form-regis"
    })
})

app.get("/courses",(req,res)=>{
    res.render("courses",{
        active : "course"
    })
})

app.get("/massage",(req,res)=>{
    res.render("massage",{
        active : "form-regis"
    })
})


//displays the home page in the website for all 404
app.get("*", (req, res) => {
    res.render("index",{
        active : "home"
    })
})

//Invoking the server
app.listen(3000, (req, res) => {
    console.log(
        "Server is up and running at port 3000"
    )
})