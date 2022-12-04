import React from "react";
import Post from "../Post";

function PostList(props) {
console.log(props)
    if (props.isAdmin === true) {
        return (
            <div>
                <ul>
                    {props.userBlogPosts.map((item) => {
                        return (<Post key={item.id} username={item.user_name} post={item.post_text} time={item.post_time} email={item.user_email} />)
                    })}
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <ul>
                    {props.userBlogPosts.map((item) => {
                        return (<Post key={item.id} username={item.user_name} post={item.post_text} time={item.post_time} />)
                    })}
                </ul>
            </div>
        )
    }

}

export default PostList