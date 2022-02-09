
const Post = props => {
      return (
         <div className="post">
         <img src='#' className="post_pic" alt="pic" />
         <div className="post_content">
            <p className="post_content-font"> {props.message} </p>
         </div>
      </div>
   );
};
          
export default Post;