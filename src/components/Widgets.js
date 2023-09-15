import React from 'react';
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search'

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets-input'>
      <SearchIcon className='widgets-searchIcon'/> 
      <input placeholder='Search Twitter' type='text'/>
      </div>

      <div className='widgets-widgetContainer'>
      <h2>Whats happening</h2>

      <TwitterTweetEmbed tweetId={'1593459801966538755'}/>

      <TwitterTimelineEmbed sourceType='profile' screenName='elonmusk' options={{height: 400}} />
      
      <TwitterShareButton url='' options={{text: "reactjs is awesome", via: "elonmusk"}} />
      </div>    
    </div>
  )
}

export default Widgets
