import { useEffect, useState } from "react";
import axios from "axios";
import "./sideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get("http://localhost:5000/api/categories");
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_FLjgjPsrVi0953L9xlUaJKOBIx4Urhs0DiJEMk5l568yQ09_oAT7LcNI9p_iXtYGiM&usqp=CAU"
          alt="img"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ex
          placeat numquam voluptate aliquid enim quos velit ad tempora unde
          quia, sapiente alias deserunt delectus dolorum laborum fuga dolor
          dolores.
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>

        <ul className="sideBarList">
          {categories.map((category) => (
            <Link
              key={category._id}
              className="link"
              to={`/?cat=${category.name}`}
            >
              <li className="sideBarListItem">
                {category.name &&
                  category.name
                    .toLowerCase()
                    .replace(/\b[a-z]/g, (c) => c.toUpperCase())}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-square-facebook"></i>
          <i className="sideBarIcon fa-brands fa-square-twitter"></i>
          <i className="sideBarIcon fa-brands fa-square-pinterest"></i>
          <i className="sideBarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
