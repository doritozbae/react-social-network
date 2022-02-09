import { NavLink } from "react-router-dom";
import * as axios from "axios"
import { usersAPI } from "../api/api";
import Paginator from './Paginator';

let Users = (props) => {

      // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

      // let pages = [];
      // for (let i=0; i<= pagesCount; i++) {
      //    pages.push(i+1);
      // }

      return <div className="App-content_users">
            <div>
               {/* {pages.map( p => {
                  return  <span className={ props.currentPage === p ? 'selected': ''}
                  onClick={ () => {props.onPageChanged(p) }}>{p}</span>
               })} */}
                <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                   currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   portionSize={5}/>
            </div>
            {
               props.users.map(u => <div className="App-content_users-user" key={u.id}>
                  <div className="App-content_users-content">
                     <span>
                        <div>
                           <NavLink to={'/profile/'+u.id}>
                           <img className="App-content_users-img" />
                           </NavLink>
                        </div>
                     </span>
                     <div className="App-content_users-info">
                        <div className="App-content_users-info_name"> {u.name} </div>
                        <div className="App-content_users-info_location">
                           {/* <div> {u.location.city}, </div>   */}
                           {/* <div className="App-content_users-info_country"> {u.location.country} </div>  */}
                        </div>
                        <div> {u.status} </div>
                     </div>
                  </div>

                  <div className="App-content_users-followbtn">
                     {
                        u.followed
                           ? <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
                              props.unfollow(true, u.id);
                              
                           }}>Unfollow</button>
                           : <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => { 
                              props.follow(true, u.id);
                           }}>Follow</button>
                     }
                  </div>
               </div>
               )}
         </div>
}

export default Users;