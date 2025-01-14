import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
  const PublicFolder = "http://localhost:5000/images/";
  const fallbackImg = post.photo;

  return (
    <div className="post">
      {post.photo && (
        <img
          className="postImg"
          src={PublicFolder + post.photo}
          alt="img"
          onError={(e) => {
            e.target.src = fallbackImg; // Cambiar a la imagen alternativa si falla la principal
          }}
        />
      )}

      <div className="postInfo">
        <div className="postCategories">
          {post &&
            post.categories.map((category) => (
              <span className="postCategory">{category}</span>
            ))}
        </div>

        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            <Link className="link" to={`/?user=${post.username}`}>
              Author:{" "}
              <b>
                {post.username &&
                  post.username
                    .toLowerCase()
                    .replace(/\b[a-z]/g, (c) => c.toUpperCase())}
              </b>
            </Link>
          </span>
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
      </div>
      <p className="postDescription">{post.desc}</p>
    </div>
  );
};

export default Post;
