const express = require('express')
const ejs = require('ejs')
const _ = require("lodash")
const dbConn = require("./database/dbConn")
const dotenv = require("dotenv")


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


//reading every blogs from database and displaying it to the websites at /blog
app.get("/blog", (req, res) => {
    dbConn.query("SELECT * from techblog", (err, rows, fields) => {
        if (err) {
            console.log(
                err.message
            )
            res.redirect("/blog")
        } else {
            res.render("blog", {
                blogs  : rows,
                active : "blog"
            })
        }

    })
})

//reading a particular blog from database and displaying it to the websites at /blog/title
app.get("/blog/:title", (req, res) => {

    const Title = req.params.title

    console.log(Title)

     dbConn.query("SELECT * from techblog WHERE Title=?", Title, (err, rows, fields) => {
        if (err) {
            console.log(
                err.message
            )
            res.redirect("/blog")
        } else {
            res.render("readBlog", {
                blog: rows[0],
                active : "blog"
            })
        }
    })
})


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

//Invoking the server
app.listen(3000, (req, res) => {
    console.log(
        "Server is up and running at port 3000"
    )
})