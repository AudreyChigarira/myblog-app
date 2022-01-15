import React from "react";
import "./components/Posts/Posts.css";

import Post from "./components/Posts/Posts.jsx";
  
const Posts = () => {
  const myblogPosts = [
    
    {
      title: "REACT?",

      body: `
      React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. 
      It is maintained by Meta and a community of individual developers and companies. 
      React can be used as a base in the development of single-page or mobile applications`,

      author: "Audrey Chigarira",
      
      imgUrl:
        "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png",
      
    },
   
    
  ];
  
  return (
    <div className="posts-container">
      {myblogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};
  
export default Posts;