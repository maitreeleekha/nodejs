module.exports = {
    getPosts(req, res,posts) {
        res.status(200).send(posts);
    },
    addPost(req, res,posts) {
        var newPost = req.body;
        var id = posts.length;
        posts.push(newPost);
        res.status(201).send({'id':id});
    },
    updatePost(req, res,posts) {
        posts[req.params.postId]=req.body;
        res.status(200).send(posts[req.params.postId]);
    },
    removePost(req, res,posts) {
        posts.splice(req.params.postId,1);
        res.sendStatus(203);
    }

}