import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
  const PublicFolder = "http://localhost:5000/images/";

  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PublicFolder + post.photo} alt="img" />
      )}

      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((category) => (
            <span className="postCategory">{category.name}</span>
          ))}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDescription">{post.desc}</p>
    </div>
  );
};

export default Post;
