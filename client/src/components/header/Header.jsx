import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Read, Write & Enjoy</span>
        <span className="headerTitleLg">Your Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/3849336/pexels-photo-3849336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
    </div>
  );
};

export default Header;
