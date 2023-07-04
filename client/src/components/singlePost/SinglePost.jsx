import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import { useEffect, useState } from "react";
import axios from "axios";

const SinglePost = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/posts/" + pathId
      );
      setPost(response.data);
    };
    getPost();
    console.log(post);
  }, [pathId]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="img" className="singlePostImg" />
        )}

        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
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
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDescription">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
