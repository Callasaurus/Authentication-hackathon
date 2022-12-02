import query from "../db/index.js";

async function getBlogPosts(email) {
  const allBlogPosts = await query(`SELECT * FROM users INNER JOIN posts ON posts.post_id = users.user_id WHERE email ILIKE $1`, [email]);
  return allBlogPosts.rows;
}

async function getAllBlogPosts() {
  const allBlogPosts = await query(`SELECT * FROM posts`);
  return allBlogPosts.rows;
}
export {
  getBlogPosts,
  getAllBlogPosts
}