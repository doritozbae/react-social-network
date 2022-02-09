import { NavLink } from "react-router-dom";
import NewMessage from "./NewMessage";
import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Login from './Login';
import { withAuthRedirect } from "../hoc/AuthRedirect.js";

const MessageItem = (props) => {
   return(
      <div className="App-messages_dialogs-user">
        <NavLink to={"/Messages/" + props.id}> 
          <div className="user_avatar"></div>
        {props.name}</NavLink>
      </div>
   )
}

const Messages = (props) => {

   let dialogsElements = props.dialogs.map(d => (
      <MessageItem name={d.name} id={d.id} />
   ));

   let messageElements = props.messages.map(m => (
      <NewMessage message={m.message} time={m.time}/>
   ));

  let onSendMessageClick = () => {
     props.sendMessage();
  };

  let onNewMessageChange = e => {
    let body = e.target.value;
    props.updateNewMessageBody(body)
  };
  
//   if (!props.isAuth ) {
//    return (
//        <Routes>
//            <Route path="/" element={<Login />} />
//        </Routes>
//    );
// }

   return (
      <div className="App-messages">
         <div className="App-messages_dialogs">
            { dialogsElements }
         </div>
         <div className="App-messages_dialog">
            <div className="App-messages_header"> 
               <h4>Alice doritozbae</h4>
               <div className="online"></div>
            </div>

            <div className="App-messages_dialog-messages">
             { messageElements }
            </div>
        
            <div className="App-messages_dialog-controls">
               <textarea
                  value={props.newMessageBody}
                  onChange={onNewMessageChange}
                  placeholder="Enter your message"
                  className="App-content_messages_textarea" 
               > </textarea>
               <button  onClick={ onSendMessageClick } className="App-content_messages_btn">Send</button>
            </div>
         </div>
      </div>
   )
}


// export let AuthRedirectComponent = withAuthRedirect(Messages);

export default Messages;
