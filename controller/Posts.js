const Posts = [
    {
        id: 1,
        title: 'Post 1',
        body: 'This is post 1'
    },
    {
        id: 2,
        title: 'Post 2',
        body: 'This is post 2'
    },
    {
        id: 3,
        title: 'Post 3',
        body: 'This is post 3'
    },
    {
        id: 4,
        title: 'Post 4',
        body: 'This is post 4'
    }
];

const fetchAllPosts = (req, res) => {
    console.log(req.body);
    res.status(200).json({data: Posts, errors: null});
}

const addPost = (req, res) => {
    console.log(req.body);
    res.status(200).json({data: Posts, errors: null});
}

module.exports = { fetchAllPosts, addPost };