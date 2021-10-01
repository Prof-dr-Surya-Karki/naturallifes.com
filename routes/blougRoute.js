const express = require("express")
const blogControllers = require("../controllers/blogControllers")
const router = express.Router()

//reading every blogs from database and displaying it to the websites at /blog
router.get("/", blogControllers.blog_index)

//reading a particular blog from database and displaying it to the websites at /blog/title
router.get("/:title", blogControllers.blog_detail)

module.exports = router
