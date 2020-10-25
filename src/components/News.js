import React, {useState, useEffect} from 'react';
import Post from './Post';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import PostDetails from './PostDetails'; 
const News = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        fetch('https://gorest.co.in/public-api/posts')
        .then(response => response.json())
        .then(data => {console.log(data.data); return setPosts(data.data)})
    }

    useEffect(() => {
        getPosts();
      }, []);

    
    return (
        <Router>
            <div className="news-container"> 
                <Switch>
                    <Route path="/news/:slug">
                        <PostDetails />
                    </Route>
                    <Route path="/news">
                        {posts ? posts.map(post => 
                            <Post 
                            key={post.id} 
                            id={post.id} 
                            title={post.title} />
                        ) : null}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default News;