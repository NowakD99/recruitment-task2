import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'

const PostDetails = () => {
    const [post, setPost] = useState([]);
    let { slug } = useParams()
    const getPost = () => {
        fetch(`https://gorest.co.in/public-api/posts/${slug}`)
        .then(response => response.json())
        .then(data => {console.log(data.data); return setPost(data.data)})
    }

    useEffect(() => {
        getPost();
         // eslint-disable-next-line 
      }, []);

    return (
        <div className="post-details">
               <p className="post-title">{post.id}. {post.title}</p>                
            <span>
                {post.body}
            </span>
            <p className="post-date">Created at: {post.created_at ? post.created_at.substring(0,10): null}</p> <Link to={`/news`}>Back</Link>
        </div>
    );
};

export default PostDetails;