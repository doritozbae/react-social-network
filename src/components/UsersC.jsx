// import * as axios from "axios"
// import React from 'react';
// import Users from "./Users.js"

// class UsersApiComponent extends React.Component {

//    onPageChanged = (pageNumber) => {
//       this.props.setCurrentPage(pageNumber);

//       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
//          this.props.setUsers(response.data.items);
//          this.props.setTotalUsersCount(response.data.totalCount);
//       });
//    }

//    render() {

//       // if (pagesCount > 10) {
//       //    if (this.props.currentPage > 5) {
//       //      for (let i = this.props.currentPage - 4; i <= this.props.currentPage + 5; i++) {
//       //        pages.push(i)
//       //        if (i == pagesCount) break
//       //      }
//       //    } else {
//       //      for (let i = 1; i <= 10; i++) {
//       //        pages.push(i)
//       //        if (i == pagesCount) break
//       //      }
//       //    }
//       //  } else {
//       //    for (let i = 1; i <= pagesCount; i++) {
//       //      pages.push(i)
//       //    }
//       //  }

//       return <Users totalUsersCount={this.props.totalUsersCount}
//                     pageSize={ this.props.pageSize}
//                     currentPage={ this.props.currentPage}
//                     onPageChanged={this.onPageChanged} 
//                     users={this.props.users}
//                     unfollow={this.props.unfollow}
//                     follow={this.props.follow}
//                     />
//    }

// }

// export default UsersApiComponent;