module.exports = {
    getComments(req, res,posts) {
        res.status(200).send(posts[req.params.postId].comments);
    }, 
    addComment(req, res,posts) {
        var newComment = req.body;
        var id = posts[req.params.postId].comments.length;
        posts[req.params.postId].comments.push(newComment);
        res.status(201).send({'comment-id':id});
    },
    updateComment(req, res,posts) {
        posts[req.params.postId].comments[req.params.commentId]=req.body;
        res.status(200).send(posts[req.params.postId].comments[req.params.commentId]);
    },
    removeComment(req, res,posts) {
        posts[req.params.postId].comments.splice(req.params.commentId,1);
        res.sendStatus(203);
    }  
  }