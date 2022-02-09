import Posts from "./Posts.js";
// import React from "react";
import {connect} from "react-redux"
import { addPostActionCreator, updateNewPostTextActionCreator } from "./redux/profileReducer.js";
// import StoreContext from './redux/storeContext.js';
 

let mapDispatchToProps = (dispatch) => {
   return {
      onPostChange: (text) => {
         let action = updateNewPostTextActionCreator(text);
         dispatch(action);
      },
      addPost: () => 
      {
         dispatch(addPostActionCreator());
      }

   }
}

let mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;