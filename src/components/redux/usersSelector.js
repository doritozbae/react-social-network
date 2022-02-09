import { createSelector } from "reselect";

const getFriendsSelector = (state) => {
   return state.usersPage.users;
 }

export const getFriends = createSelector(getFriendsSelector, (users) => {
   return users.filter(u => true);
 });
 
 export const getPageSize = (state) => {
   return state.usersPage.pageSize;
 }
 
 export const getTotalFriendsCount = (state) => {
   return state.usersPage.totalFriendsCount;
 }
 
 export const getCurrentPage = (state) => {
   return state.usersPage.currentPage;
 }
 
 export const getIsFetching = (state) => {
   return state.usersPage.isFetching;
 }
 export const getFollowingInProgress = (state) => {
   return state.usersPage.followingInProgress;
 } 