const currTime = new Date().toLocaleTimeString();

const Post = (props) => {
   return (
      <div className="message">
      <div className="post_pic" alt="pic"> </div>
      <div className="message_content">
         <p className="message_content-font"> {props.message} </p>
      </div>
      <div className="message_content-time">
         <p> {props.time || currTime} </p>
      </div>
   </div>
);
};
       
export default Post;