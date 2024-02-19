require('dotenv').config();
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json());

const port = 3000;
const posts = [{
    username: "Kyle",
    title: "Hello World",
    content: "This is a default post"
},
{
    username: "Jeff",
    title: "Hello World 2",
    content: "This is a default post 2"
}];

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name));
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

