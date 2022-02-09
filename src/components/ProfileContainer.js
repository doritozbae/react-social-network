import React from "react";
import {connect} from "react-redux"
import Profile from "./Profile.js";
import {getUserProfile} from '../components/redux/profileReducer.js'
import { useMatch } from 'react-router-dom';
// import { withAuthRedirect } from "../hoc/AuthRedirect.js";
import { compose } from 'redux';
import { updateStatus, getStatus } from './redux/profileReducer';

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;

      debugger
      if (!userId) {
        userId = this.props.authorizedUserId;
  
        if (!userId) {
          this.props.history.push("/login");
        }
      }

      this.props.getUserProfile(userId);
      this.props.getStatus(userId)
   }

   render() {
      return (
         <div className="App-content">
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
         </div>
      )
   }
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authorizedUserId: state.auth.userId,
   isAuth: state.auth.isAuth
})

export const withRouter = (Component) =>{
   let RouterComponent = (props) => {
           const match = useMatch('/profile/:userId/');
           return <Component {...props} match={match}/>;
   }
   return RouterComponent;
}

export default compose(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
   withRouter
)(ProfileContainer);  