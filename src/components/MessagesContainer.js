import { updateNewMessageBodyCreator, sendMessageCreator } from "./redux/dialogsReducer.js";
import Messages from "./Messages.js";
import {connect} from "react-redux"
// import { withAuthRedirect } from "../hoc/AuthRedirect.js";
import { compose } from "redux";

let mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageBody: (body) => {
         dispatch(updateNewMessageBodyCreator(body));
      },
      sendMessage: () => 
      {
         dispatch(sendMessageCreator());
      }
   }
}

// let AuthRedirectComponent = withAuthRedirect(Messages);

// const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default MessagesContainer;

export default compose(
   connect(mapStateToProps, mapDispatchToProps)
   // withAuthRedirect
 )(Messages);
