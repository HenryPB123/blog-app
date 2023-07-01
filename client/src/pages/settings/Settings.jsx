import "./settings.css";
import SideBar from "../../components/sideBar/SideBar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsProfilePicture">
            <img
              src="https://i.pinimg.com/736x/90/f7/a4/90f7a49893bc987858e13e10ffc72a23.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsProfilePictureIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Henry" />
          <label>Email</label>
          <input type="text" placeholder="mahe2di@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsButton">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
