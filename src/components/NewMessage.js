const Post = (props) => {
   return (
      <div className="message">
      <img src='#' className="post_pic" alt="pic" />
      <div className="message_content">
         <p className="message_content-font"> {props.message} </p>
      </div>
   </div>
);
};
       
export default Post;