import { usersAPI, profileAPI } from "../../api/api.js";

const ADD_POST = "ADD-POST";
const DELETE_POST = 'DELETE_POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
export const setStatus = (status) => ({ type: SET_STATUS, status });

let initialState = {
   posts: [
     { id: 1, message: "Hi", likesCount: 12 },
     { id: 2, message: "Use double click to change profile status", likesCount: 11 },
   ],
   newPostText: "",
   profile: null,
   status: ""
}

const profileReducer = (state = initialState, action ) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
          };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ""
         };

      }
      case  UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText
         }

      }

      case  SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile
         }
      }

      case SET_STATUS: {
         return {
            ...state,
            status: action.status
         }

      }
      case DELETE_POST: {
         return {...state, posts: state.posts
           .filter(p => p.id != action.id)};
       }

      default: 
      return state;
   }
}

export const getUserProfile = (userId) => (dispatch) => {
   usersAPI.getProfile(userId).then(response => {
     dispatch(setUserProfile(response.data));
   });
}

export const getStatus = (userId) => (dispatch) => {
   profileAPI.getStatus(userId).then(response => {
     dispatch(setStatus(response.data));
   });
}

export const updateStatus = (status) => (dispatch) => {
   profileAPI.getStatus(status).then(response => {
      if (response.data.resultCode === 0) {
         dispatch(setStatus(status));
      }
   });
}

export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export default profileReducer;