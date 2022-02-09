import Post from "./NewPost.js";
import React from "react";
// import { addPostActionCreator, updateNewPostTextActionCreator } from "./redux/profileReducer.js";


const Posts = (props) => {

   let postElements = props.posts.map(p => (
      <Post message={p.message} likesCount={p.likesCount} />
   ));

   let newPostElement = React.createRef();
  
   let onAddPost = () => {
      props.addPost();
   };
  
   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.onPostChange(text)
   };
   
   return (
      <div className="App-content_main-posts">
         <h3>My posts</h3>
            <textarea onChange={ onPostChange } 
                      ref={newPostElement} 
                      className="App-content_textarea" 
                      value={props.newPostText}> </textarea>
            <button onClick={ onAddPost } className="App-content_main-posts_btn">Send</button>
            <div className="App-content_main-posts_posts">
               {postElements}
            </div>
          </div> 
   )
}

export default Posts;