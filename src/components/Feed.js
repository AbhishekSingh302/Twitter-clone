import "./Feed.css";
import React, { useEffect, useState } from 'react';
import TweetBox from "./TweetBox";
import Post from "./Post";
// import img from './photos/heroimg.jpg';
import db from '../firebase';
import FlipMove from 'react-flip-move'

const Feed = () => {
  
  const [posts, setPosts] = useState ([]);

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  return (
    <div className="feed">
        <div className="feed-header">
        <h2>Home by Abhishek</h2>
        </div>
        <TweetBox/>

        <FlipMove>
        {posts.map(post => {
          return <Post key={post.text} displayName={post.displayName} username={post.username} verified={post.verified} text={post.text} avatar={post.avatar} image={post.image}/>
        })}
        </FlipMove>

        {/* <Post displayName="Abhishek Singh" username="abhishek_302" verified text="Its working yooo" avatar="" image={img}/> */}

    </div>
  )
}

export default Feed
