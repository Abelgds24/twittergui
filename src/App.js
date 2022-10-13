import logo from './logo.svg';
import './App.css';
import './tweet.css'
import Tweet from "./tweet.js";
import React from 'react';

 
let igms =  <img 
src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
alt="new"
/>
class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {tweets: [
      {
          profile_pic: "https://www.lookslikefilm.com/wp-content/uploads/2019/08/Haley-Walls.jpg",
          logo: "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png",
          author: "LaithHater11", 
         username: "@laithsucks24",
         text: "Laith you suck", 
        replies: [
        "truly great",
        "another banger"
      ],
        data: "7:14 PM, October 11th, 2022"},
      { 
        logo: "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png",
        profile_pic: "https://images.squarespace-cdn.com/content/v1/53a60116e4b0488fb14d69d8/1597336605370-5BEYBPCYKAZEMWC4J7KQ/image-asset.jpeg?format=1000w",
        author: "Dogman22",
        username: "@doglover47",
        text: "Merry Christmas!", 
       replies: [
        "truly great",
        "another banger"],
        data: "3:11 AM, Decemeber 25th, 2008"
      },
      { logo: "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png",
         profile_pic: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_Channel_4_News_logo.svg/1200px-New_Channel_4_News_logo.svg.png",
        author: "Channel4Weather",
      username: "@c4weathertoday",
        text: "the weather is so good",  
      replies: [
        "great",
        "another banger"],
        data: "8:26 AM, July 4th, 2019"},
      { logo: "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png", 
        profile_pic: "https://images.squarespace-cdn.com/content/v1/55535d7ce4b0f091765a1cdc/1516898856538-BOSI038UZYFEUBR02TWH/Sports-News.jpg",
        author: "Sportsnews",
      username: "@thesportsshow",
        text: "Bills win 23-20",
       replies: [
        "truly great",
        "Noo"],
        data: "11:11 AM, November 23rd, 2017"}
  
    ]}
  }

 
  render() {
 
    <div onClick={this.addTweet}>New Tweet</div>
 
  return (
<div className="App">

 
   {this.state.tweets.map((tweet)=> {
    return <Tweet text={tweet.text}  author = {tweet.author} username = {tweet.username} profile_pic = {tweet.profile_pic} data = {tweet.data} logo = {tweet.logo}/>
   })}
 
</div>
  );
}
}
export default App;

