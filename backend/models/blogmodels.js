import query from "../db/index.js";

async function getBlogPosts(email) {
  const allBlogPosts = await query(`SELECT * FROM users INNER JOIN posts ON posts.user_id = users.user_id WHERE user_email ILIKE $1`, [email]);
  return allBlogPosts.rows;
}

async function getAllBlogPosts() {
  // const emailCheck = await query(`SELECT * FROM users WHERE user_email ILIKE $1`, [email]);
  // if (emailCheck.rows > 0) {
  // const allBlogPosts = await query(`SELECT * FROM posts`);
  // return allBlogPosts.rows;
  // }
  const allBlogPosts = await query(`SELECT * FROM posts`);
  return allBlogPosts.rows;
}

export {
  getBlogPosts,
  getAllBlogPosts
}