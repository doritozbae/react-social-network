
const Post = props => {
      return (
         <div className="post">
         <div className="post_pic" alt="pic"> </div>
         <div className="post_content">
            <p className="post_content-font"> {props.message} </p>
         </div>
      </div>
   );
};
          
export default Post;