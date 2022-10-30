const Blog = require('../models/Blog');
const User = require('../models/User')
const getLast3Blogs = async () => {
    const blogs = await Blog.find({}).lean();
    const lastBlogs = blogs.slice(-3)
    return lastBlogs
}
const createBlog = async ( title, imageUrl,content, category, owner) => {
    await Blog.create({ title, imageUrl, content, category, owner})
}
const getAllBlogs = async () => {
    const blogs = await Blog.find({}).lean()
    return blogs
}
const getOneBlog = async (_id) => {
    const blog = await Blog.findById(_id).lean()
    return blog;
}
const getFollowers = async (id) => {
    const blog = await Blog.findById(id);
    const following = blog.followList
    let nameArray = following.map(async (id) => {
        const user = await User.findById(id)
        return await user.username
    })
    return nameArray
}
const follow = async (_id, blogId) => {
    const blog = await Blog.findById(blogId);
    blog.followList.push(_id);
    blog.save()
}
const editBlog = async (_id, title, imageUrl, content, category) => {
    return await Blog.findByIdAndUpdate(_id, {title, imageUrl, content, category}, {
        runValidators: true,
    })
}
const deleteBlog = async (_id) => {
    await Blog.findByIdAndDelete(_id)
}
const counting = async (userId) => {
    const postCount = await Blog.countDocuments({owner: userId}).lean()
    const followerBlogsCount = await Blog.countDocuments({followList: {$all: [userId]}}).lean();
    return { postCount, followerBlogsCount}
}
const getBlogsForProfile = async (userId) => {
    const createdBlogs = await Blog.find({owner: userId}).lean();
    const followedBlogs = await Blog.find({followList: {$all: [userId]}}).lean()
    return { createdBlogs, followedBlogs}
}
module.exports = { 
    getBlogsForProfile,
    counting,
    deleteBlog,
    editBlog,
    follow,
    getFollowers,
    getOneBlog,
    getAllBlogs,
    createBlog,
    getLast3Blogs,
}