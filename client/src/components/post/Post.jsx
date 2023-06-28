import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://i.blogs.es/f82e1a/clay-banks-w_qtfipbjbg-unsplash/450_1000.webp"
        alt="img"
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Music</span>
          <span className="postCategory">Life</span>
        </div>
        <spa className="postTitle">Lorem ipsum dolor sit amet</spa>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ex
        provident sit deserunt, molestiae, accusamus placeat cumque quod nihil
        autem veritatis, laudantium molestias excepturi nesciunt tenetur unde
        quos illum optio. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Saepe ex provident sit deserunt, molestiae, accusamus placeat
        cumque quod nihil autem veritatis, laudantium molestias excepturi
        nesciunt tenetur unde quos illum optio. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Saepe ex provident sit deserunt,
        molestiae, accusamus placeat cumque quod nihil autem veritatis,
        laudantium molestias excepturi nesciunt tenetur unde quos illum optio.
      </p>
    </div>
  );
};

export default Post;
