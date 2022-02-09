const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});

let initialState = {
   dialogs: [
     { id: 1, name: "Dimych" },
     { id: 2, name: "Andrew" },
     { id: 3, name: "Sveta" },
     { id: 4, name: "Sasha" },
     { id: 5, name: "Viktor" },
     { id: 6, name: "Valera" }
   ],
   messages: [
     { id: 1, message: "Hi" },
     { id: 2, message: "How is your it-kamasutra?" },
     { id: 3, message: "Yo" },
     { id: 4, message: "Yo" },
     { id: 5, message: "Yo" }
   ],
   newMessageBody: ""
}

 const dialogsReducer = (state = initialState, action ) => {

   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
      //     {
      //    let stateCopy = {...state};
      //    // stateCopy.newMessageBody = [...state.newMessageBody]
      //    stateCopy.newMessageBody = action.body;
      //    return stateCopy;
      // }
            return {
               ...state,
               newMessageBody: action.body
            }

      case SEND_MESSAGE: 
      // {
      //    let stateCopy = {...state};
      //    let body = stateCopy.newMessageBody;
      //    stateCopy.newMessageBody = "";
      //    stateCopy.messages = [...state.messages];
      //    stateCopy.messages.push({ id: 6, message: body });
      //    return stateCopy;
      // }
            let body = state.newMessageBody;
            return {
               ...state,
               newMessageBody: '',
               messages: [...state.messages, { id: 6, message: body }]
            };
      default: 
      return state;
   }
}

export default dialogsReducer;