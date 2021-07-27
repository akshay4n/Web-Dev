const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')
const router = express.Router()
//

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render('home')
})

router.get('/blog',(req,res)=>{
    // blogs.blogs.forEach(element => {
    //     console.log(element.title)
    // });
    // res.sendFile(path.join(__dirname,'../templates/bloghome.html'))
    res.render('blogHome',{
        blogs:blogs.blogs
    })
})

router.get('/blogpost/:slug',(req,res)=>{
    myBlog = blogs.blogs.filter((e)=>{
        return e.slug == req.params.slug
    })
    console.log(myBlog[0]);
    res.render('blogPage',{
        title:myBlog[0].title,
        content:myBlog[0].content
    });
    console.log(myBlog)
    // res.sendFile(path.join(__dirname,'../templates/blogPage.html'))
})

module.exports =  router