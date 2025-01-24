import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./write.css";
import { Context } from "../../context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  //!My code
  const [categories, setCategories] = useState([]);
  const [categoriesToSend, setCategoriesToSend] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get("http://localhost:5000/api/categories");
      setCategories(response.data);
    };
    getCategories();
  }, []);

  const handleSelect = (e) => {
    if (!categoriesToSend.includes(e.target.value)) {
      setCategoriesToSend([...categoriesToSend, e.target.value]);
    }
  };
  const handleDelete = (cat) => {
    setCategoriesToSend(categoriesToSend.filter((item) => item !== cat));
  };

  //!So here

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      desc,
      categories: categoriesToSend,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/posts",
        newPost
      );
      setCategoriesToSend([]);
      window.location.replace("/post/" + response.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="write">
      {file && (
        <img src={URL.createObjectURL(file)} alt="img" className="writeImg" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="writeFormGroupSelect">
          <div className="selectCategories">
            <label htmlFor="catSelect">Add a category: </label>
            <br />

            <select id="catSelect" onChange={(e) => handleSelect(e)}>
              <option value="">Select categories</option>

              {categories.map((cat) => {
                return (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                );
              })}
            </select>
          </div>

          {categoriesToSend.length > 0 && (
            <div className="sendCats">
              <label htmlFor="toSend">Categories to send:</label>
              <br />
              <ul id="toSend">
                {categoriesToSend.map((cat) => (
                  <li className="category" key={cat}>
                    {cat}
                    <button onClick={() => handleDelete(cat)}>X</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>{" "}
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>{" "}
    </div>
  );
};

export default Write;
