import React from "react";

function Post(props) {
    
    if (props.email) {
        return (
            <div>
                <h3>{props.username}</h3>
                <p>{props.post}</p>
                <h5>{props.time}</h5>
                <h5>{props.email}</h5>
            </div>
        )
    } else {
        return (
            <div>
                <h3>{props.username}</h3>
                <p>{props.post}</p>
                <h5>{props.time}</h5>
            </div>
        )
    }
}

export default Post