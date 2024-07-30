import React, { useState } from 'react';
import Post from './Post/Post';
import Suggestions from './Suggestions';
import "./Timeline.css";

function Timeline() {
        const [posts, setPosts] = useState([
            {
                user: "prcher_w",
                postImage: "https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1448734171.jpg",
                likes: 12,
                timestamp: "2d",
            },
            {
                user: "johndoe",
                postImage: "https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg",
                likes: 53,
                timestamp: "7h",
            },
            {
                user: "gracey_hart",
                postImage: "https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp",
                likes: 18,
                timestamp: "34m",
            },
            {
                user: "ocean_man",
                postImage: "https://i.guim.co.uk/img/media/5d65b28ffe8b2289925b0f57121b576da4412b05/153_113_1135_681/master/1135.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=fda1b6ea902a36e9b6d2e173d97159c6",
                likes: 781,
                timestamp: "9h",
            },
        ]);
    return ( 
    <div className="timeline">
        <div className="timeline__left">
            <div className="timeline__posts">
                {posts.map((post) => (
                    <Post
                    user={post.user}
                    postImage={post.postImage} 
                    likes={post.likes}
                    timestamp={post.timestamp}
                    />
                ))}
            </div>
        </div>
        <div className="timeline__right">
            <Suggestions />
        </div>
    </div>
    );
}

export default Timeline