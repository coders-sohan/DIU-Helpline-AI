const Blog = require("../Models/BlogModel");


exports.patchBlogCommentService = async (id, body) => {
    const blog = await Blog.findOneAndUpdate(
        { "comments._id": id },
        {
            $set: {
                "comments.$.status": body.status,
            },
        },
        { new: true }
    );
    return blog;
}

exports.deleteBlogCommentService = async (id) => {
    // delete blog comment by comment id
    const blog = await Blog.findOneAndUpdate(
        { "comments._id": id },
        {
            $pull: {
                comments: { _id: id },
            },
        },
        { new: true }
    );
    return blog;
}