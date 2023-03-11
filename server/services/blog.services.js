const Blog = require("../Models/BlogModel");

exports.getBlogService = async (filters, queries) => {
  const blogs = await Blog.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sort)
    .populate("comments.blogId");

  const total = await Blog.countDocuments(filters);
  const page = Math.ceil(total / queries.limit);
  return { total, page, blogs };
};

exports.createBlogService = async (data) => {
  const blog = await Blog.create(data);
  return blog;
};

exports.getBlogByIdService = async (id) => {
  const blog = await Blog.findById(id);
  return blog;
};

exports.getBlogByPathService = async (id) => {
  const blog = await Blog.find({path:id});
  return blog;
};

exports.deleteBlogByIdService = async (id) => {
  const result = await Blog.deleteOne({ _id: id });
  return result;
};
exports.updateBlogByIdService = async (id, body) => {
  const result = await Blog.updateOne({ _id: id }, body);
  return result;
};

exports.blogCommentService = async (id, body) => {
  const blog = await Blog.findByIdAndUpdate(
    id,
    {
      $push: {
        comments: {
          name: body.comments.name,
          email: body.comments.email,
          content: body.comments.content,
          blogId: body.comments.blogId
        },
      },
    },
    { new: true }
  );
  return blog;

}