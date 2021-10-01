const dbConn = require("../database/dbConn")
//get all the blogs 
const blog_index = async (req,res) =>{
    await dbConn.query("SELECT * from Blog_Table", (err, rows, fields) => {
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
}

//get a specific blog
const blog_detail= async (req,res) =>{
    const Title = req.params.title

    console.log(Title)
     await dbConn.query("SELECT * from Blog_Table WHERE Title=?", Title, (err, rows, fields) => {
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
}

module.exports ={
    blog_index,
    blog_detail
}