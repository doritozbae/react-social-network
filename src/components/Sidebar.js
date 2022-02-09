import { NavLink } from "react-router-dom";

function Sidebar() {
   return (
      <div className="App-nav">
          
            {/* <li className="App-nav_item">Profile</li>
            <li className="App-nav_item">Messages</li>
            <li className="App-nav_item">News</li>
            <li className="App-nav_item">Music</li>
            <li className="App-nav_item">Settings</li> */}
            <NavLink to="/profile" > Profile</NavLink>
            <NavLink to="/Messages"> Messages</NavLink>
            <NavLink to="/Users"> Users</NavLink>
            
            <NavLink to="#"> News</NavLink>
            <NavLink to="#"> Settings</NavLink>
          
        </div>
   )
}

export default Sidebar;