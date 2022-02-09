import React from "react";
import PostsContainer from "./PostsContainer.js";
import ProfileInfo from "./ProfileInfo.js";
// import { updateStatus } from './redux/profileR??educer';

const Profile = (props) => {

   return (
      <div className="App-content">
          <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
          <PostsContainer /> 
      </div>
   )
}

export default Profile;


