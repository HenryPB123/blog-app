import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

const SinglePost = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const PublicFolder = "http://localhost:5000/images/";
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/posts/" + pathId
      );
      setPost(response.data);
      setTitle(response.data.title);
      setDesc(response.data.desc);
    };
    getPost();
  }, [pathId]);

  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:5000/api/posts/" + pathId, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {
      //some error
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:5000/api/posts/" + pathId, {
        username: user.username,
        title: title,
        desc: desc,
      });
      setUpdateMode(false);
    } catch (error) {
      //some error
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            src={PublicFolder + post.photo}
            alt="img"
            className="singlePostImg"
          />
        )}
        {updateMode ? (
          <input
            type="text"
            defaultValue={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-regular fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-regular fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
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
        {updateMode ? (
          <textarea
            className="singlePostDescriptionInput"
            defaultValue={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        ) : (
          <p className="singlePostDescription">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
