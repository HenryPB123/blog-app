import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exists, setExists] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        { username: username, email: email, password: password }
      );
      console.log("response", response.data);
      if (response.data === "User already exists!!") {
        setExists(true);
        setTimeout(() => {
          window.location.replace("/login");
        }, 1500);
      } else {
        window.location.replace("/login");
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <div className="register-wrap">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="registerInput"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="registerButton">
            <Link className="link" to="/register">
              Register
            </Link>
          </button>
        </form>
        <p className="registerP">Do you have an account?</p>

        <button className="registerButtonLogin" type="submit">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
        {exists && (
          <span style={{ color: "red", marginTop: "10px" }}>
            User alreary exists!!
          </span>
        )}
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            Something went wrong!
          </span>
        )}
      </div>
    </div>
  );
};

export default Register;
