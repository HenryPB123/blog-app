import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://concepto.de/wp-content/uploads/2020/03/musica-e1584123209397.jpg"
          alt="img"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Henry</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          deleniti commodi eos cumque aliquid expedita ipsum, a exercitationem,
          ullam hic neque nihil? Ipsam veniam itaque quos iste, facere quasi
          magni? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ducimus deleniti commodi eos cumque aliquid expedita ipsum, a
          exercitationem, ullam hic neque nihil? Ipsam veniam itaque quos iste,
          facere quasi magni? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ducimus deleniti commodi eos cumque aliquid expedita
          ipsum, a exercitationem, ullam hic neque nihil? Ipsam veniam itaque
          quos iste, facere quasi magni?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
