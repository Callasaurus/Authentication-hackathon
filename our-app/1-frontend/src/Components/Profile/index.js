import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { v4 as uuidv4 } from "uuid"
import PostList from "../PostList";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [isAdmin, setIsAdmin] = useState(false)
  const [userBlogPosts, setUserBlogPosts] = useState([])
  const [isVerified, setIsVerified] = useState(false)

  function adminCheck(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].user_email === user.email) {
        if (data[i].user_type === "Admin") {
          return true;
        }
      }
    }
    return false;
  }

  function emailCheck(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].user_email === user.email) {
        return true;
      }
    }
    return false;
  }

  async function getPosts() {
    const usersPosts = await fetch(`http://localhost:3001/api/blog/${user.email}`)
    let data = await usersPosts.json();
    let niceData = data.payload;

    setIsAdmin(adminCheck(niceData))

    for (let i = 0; i < niceData.length; i++) {
      niceData = {
        user_name: niceData[i].user_name,
        post_text: niceData[i].post_text,
        post_time: niceData[i].post_time,
        user_email: niceData[i].user_email,
        user_type: niceData[i].user_type,
        id: uuidv4()
      }
    }
    if (niceData === undefined) {
      setUserBlogPosts([{ user_name: "NO DATA TO SHOW - UNAUTHORIZED OR YOU HAVE NO POSTS", post_text: "", post_time: "" }]);
      setIsVerified(false);
    } else {
      setUserBlogPosts([niceData]);
      setIsVerified(true);
    }
  }

  async function getAllPosts() {
    const usersPosts = await fetch(`http://localhost:3001/api/blog`)
    let data = await usersPosts.json();
    let niceData = data.payload;

    setIsAdmin(adminCheck(niceData))
    setIsVerified(emailCheck(niceData))

    for (let i = 0; i < niceData.length; i++) {
      niceData[i] = {
        user_name: niceData[i].user_name,
        post_text: niceData[i].post_text,
        post_time: niceData[i].post_time,
        user_email: niceData[i].user_email,
        user_type: niceData[i].user_type,
        id: uuidv4()
      }
    }
    if (isVerified === true) {
      setUserBlogPosts(niceData);
    } else {
      setUserBlogPosts([{ user_name: "NO DATA TO SHOW - UNAUTHORIZED TO VIEW BLOG POSTS", post_text: "", post_time: "" }]);
    }
  }

  console.log(isVerified)

  function clearPosts() {
    setUserBlogPosts([]);
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.nickname}</h2>
        <p>{user.email}</p>
        <button onClick={getPosts}>Get my blog posts</button>
        <button onClick={getAllPosts}>Get all blog posts</button>
        <button onClick={clearPosts}>Clear blog posts</button>
        <PostList userBlogPosts={userBlogPosts} isAdmin={isAdmin} />
      </div>
    )
  );
};

export default Profile;