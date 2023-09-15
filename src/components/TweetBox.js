import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@mui/material';
import db from '../firebase';

const TweetBox = () => {

  const [tweetMessage, setTweetMesssage] = useState ("");
  const[tweetImage, setTweetImage] = useState ("")

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: "Mr.Unknown",
      username: "newuser",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:"https://www.bluwe.com/wp-content/uploads/2018/10/male-avatar-profile-picture-vector-10211761.jpg"
    });
    setTweetMesssage("");
    setTweetImage("");
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox-input'>
                <Avatar src="https://www.bluwe.com/wp-content/uploads/2018/10/male-avatar-profile-picture-vector-10211761.jpg"/>
                <input value={tweetMessage} onChange={(e) => setTweetMesssage(e.target.value)} placeholder='Whats happening?' type='text'/>
            </div>
            <input value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} className='tweetBox-imageinput' placeholder='Optional: Enter image URL' type='text'/>

            <Button className='tweetBox-btn' type='submit' onClick={sendTweet}>Tweet</Button>
        </form>
      
    </div>
  )
}

export default TweetBox
