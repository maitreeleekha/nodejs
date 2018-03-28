const express = require('express');
const post = require('./posts.js');
const comments = require('./comments.js');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

var posts = [];

app.get('/posts', (req,res)=>{
    post.getPosts(req,res,posts);
});
app.post('/posts', (req,res)=>{
    post.addPost(req,res,posts)
});
app.put('/posts/:postId',(req,res)=>{
    post.updatePost(req,res,posts)
});
app.delete('/posts/:postId',(req,res)=>{
    post.removePost(req,res,posts)
});


app.get('/posts/:postId/comments',(req,res)=>{
    comments.getComments(req,res,posts)
});
app.post('/posts/:postId/comments',(req,res)=>{
    comments.addComment(req,res,posts)
});
app.put('/posts/:postId/comments/:commentId',(req,res)=>{
    comments.updateComment(req,res,posts)
});
app.delete('/posts/:postId/comments/:commentId',(req,res)=>{
    comments.removeComment(req,res,posts)
});

app.listen(3000);


