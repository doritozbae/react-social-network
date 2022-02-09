import {connect} from "react-redux"
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestFriends, getUsersThunkCreator} from "./redux/usersReducer.js"
import React from 'react';
import Users from "./Users.js"
import Preloader from "./Preloader.js";
// import { withAuthRedirect } from "../hoc/AuthRedirect.js";
import { compose } from "redux";
import {
   getCurrentPage,
   getFollowingInProgress,
   getFriends, getIsFetching,
   getPageSize,
   getTotalFriendsCount
 } from './redux/usersSelector';
 import Paginator from "./Paginator.js";

 
class UsersApiComponent extends React.Component {
   componentDidMount() {
      const { currentPage, pageSize } = this.props;
      this.props.getUsers(currentPage, pageSize);
   }

   onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize);
   } 

   render() {

      console.log("USERS");

      return <>
               { this.props.isFetching ? <Preloader /> : null}
               
               <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={ this.props.pageSize}
                    currentPage={ this.props.currentPage}
                    onPageChanged={this.onPageChanged} 
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress}
                    />
               </> 
   }
}

const mapStateToProps = (state) => {
   // console.log('mapStateToProps USERS')

   return {
     users: getFriends(state),
     pageSize: getPageSize(state),
     totalUsersCount: getTotalFriendsCount(state),
     currentPage: getCurrentPage(state),
     isFetching: getIsFetching(state),
     followingInProgress: getFollowingInProgress(state),
   }
 }

export default compose(
   // withAuthRedirect,
   connect(mapStateToProps, 
      { follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers: requestFriends })
 )(UsersApiComponent) 

