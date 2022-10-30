const { userOnly } = require('../middlewares/authMiddleware');
const Blog = require('../models/Blog');
const { getLast3Blogs, createBlog, getAllBlogs, getOneBlog, getFollowers, follow, editBlog, deleteBlog, counting, getBlogsForProfile } = require('../services/blogService');

const router = require('express').Router();
    //Home
    router.get('/', async (req, res) => {
        const blogs = await getLast3Blogs()
        res.render('home', {blogs})
    })
    //Blog
    router.get('/blogs', async (req, res) => {
        const blogs = await getAllBlogs()
        res.render('catalog', { blogs })
    })

    //Create
    router.get('/create',userOnly, (req, res) => {
        res.render('create')
    })
    router.post('/create',userOnly, async (req, res) => {
        const userId = req.user._id;
        const { title, imageUrl, content, category } = req.body;
        try {
            await createBlog(title, imageUrl, content, category, userId)
        } catch (error) {
            return res.render('create', {error: error.message})
        }
        res.redirect('/')
    })

    //Details
    router.get('/details/:id', async (req, res) => {
        const id = req.params.id;
        const user = req?.user;
        const blog = await getOneBlog(id)

        //Setting owner
        const populated = await Blog.findById(id).populate('owner')
        blog.email = populated.owner.email;

        //Getting names
        let nameArray = await getFollowers(id)
        const people = await (await Promise.all(nameArray)).join(', ')
        blog.people = people
        //Owner or not
        if (blog.owner == user?._id){
            blog.isAuthor = true;
        }else {
            blog.isAuthor = false;
        }
        // Following or not
        const follows = blog.followList.some((id) => id == user?._id)
        if(follows){
            blog.isFollowing = true;
        }else {
            blog.isFollowing = false;
        }
        res.render('details', blog)
    })

    //Follow
    router.get('/details/:id/follow', userOnly ,async (req, res) => {
        const blogId = req.params.id;
        const userId = req.user._id;
        const blog = await getOneBlog(blogId)
        const isAlreadyFollowing = blog.followList.some((id) => id == userId)
        if(blog.owner == userId){
            res.render('404')
        }else if(isAlreadyFollowing){
            res.render('404')
        }else {
            await follow(userId, blogId)
            res.redirect(`/details/${blogId}`)
        }
    })

    //Edit
    router.get('/details/:id/edit',userOnly, async (req, res) => {
        const blogId = req.params.id;
        const blog = await getOneBlog(blogId);
        const isOwner = blog.owner == req.user._id;
        if (isOwner){
            res.render('edit', blog)
        }else {
            res.render('404')
        }
    })
    router.post('/details/:id/edit',userOnly, async (req, res) => { 
        const blogId = req.params.id;
        const {title, imageUrl, content, category } = req.body;
        try {
            await editBlog(blogId, title, imageUrl, content, category)
        } catch (error) {
            return res.render('edit', {error: error.message,_id: blogId, title, imageUrl, content, category})
        }
        res.redirect(`/details/${blogId}`)
    })

    //Delete
    router.get('/details/:id/delete',userOnly, async (req, res) => {
        const blogId = req.params.id;
        const blog = await getOneBlog(blogId)
        const isOwner = blog.owner == req.user._id;
        if (isOwner){
            await deleteBlog(blogId)
            res.redirect('/blogs')
        }else {
            res.render('404')
        }

    })

    //Profile
    router.get('/profile',userOnly, async (req, res) => {
        const user = req.user
        const userId = user._id;
        //Counting
        const count = await counting(userId)
        user.createdCount = count.postCount;
        user.followedCount = count.followerBlogsCount;

        //Blogs
        const blogs = await getBlogsForProfile(userId)
        user.createdBlogs = blogs.createdBlogs;
        user.followedBlogs = blogs.followedBlogs;
        res.render('profile', user)
    })
module.exports = router;