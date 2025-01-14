import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PublicFolder = "http://localhost:5000/images/";
  let fallbackImg;

  if (user) {
    console.log("user desde top", user);

    fallbackImg = user.profilePic;
  }

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to={"/login"}>
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/"}>
              ABOUT
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to={"/"}>
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/write"}>
              WRITE
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topImage"
              src={PublicFolder + user.profilePic}
              alt="photo"
              onError={(e) => {
                e.target.src = fallbackImg; // Cambiar a la imagen alternativa si falla la principal
              }}
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to={"/login"}>
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to={"/register"}>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <span className="pName">{user && user.username}</span>
        <li className="topListItem logout" onClick={handleLogout}>
          {user && "LOGOUT"}
        </li>

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default TopBar;
