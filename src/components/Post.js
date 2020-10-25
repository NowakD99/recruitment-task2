import React from 'react';
import { Link } from "react-router-dom";

const Post = ({id,title}) => {

    return (
        <div className="post">
            <span><Link to={`/news/${id}`}>{id}. {title.length > 50 ? title.substring(0,50) + "..." : title}</Link></span>
        </div>  
    );
};

export default Post;