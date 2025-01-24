import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sideBar/SideBar";
import "./home.css";
import { useLocation } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/posts" + search
      );
      setPosts(response.data);
    };

    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        {posts.length > 0 ? (
          <Posts posts={posts} />
        ) : (
          <span
            style={{
              width: "74%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: "300",
              fontFamily: "Josefin Sans",
            }}
          >
            There are no post still !!
          </span>
        )}

        <SideBar />
      </div>
    </>
  );
}

export default Home;
