import "./settings.css";
import SideBar from "../../components/sideBar/SideBar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Settings = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PublicFolder = "http://localhost:5000/images/";
  let fallbackImg;
  if (user) {
    console.log(user);

    fallbackImg = user.profilePic;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
    };
    if (username) updatedUser.username = username;
    if (email) updatedUser.email = email;
    if (password) updatedUser.password = password;

    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;

      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const response = await axios.put(
        "http://localhost:5000/api/users/" + user._id,
        updatedUser
      );
      if (response.status === 200) {
        setSuccess(true);
        dispatch({ type: "UPDATE_SUCCESS", payload: response.data });
        setTimeout(() => {
          setSuccess(false);
          window.location.replace("/");
        }, 3000);
      }
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label htmlFor="">Profile Picture</label>
          <div className="settingsProfilePicture">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : PublicFolder + user.profilePic
              }
              alt="photo"
              onError={(e) => {
                e.target.src = fallbackImg; // Cambiar a la imagen alternativa si falla la principal
              }}
            />
            <label htmlFor="fileInput">
              <i className="settingsProfilePictureIcon fa-regular fa-circle-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label>Email</label>
          <input
            type="text"
            placeholder={user.email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="settingsButton" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{
                color: "green",
                marginTop: "10px",
                alignSelf: "center",
              }}
            >
              Profile has been updated successfully.
            </span>
          )}
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
