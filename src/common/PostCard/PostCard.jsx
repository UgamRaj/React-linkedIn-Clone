import { useNavigate } from "react-router-dom";
import "./postCard.css";

const PostCard = ({ post }) => {
  // console.log(post);
  const navigate = useNavigate();

  return (
    <>
      <div className="articleContainer">
        <p
          className="userNamePost"
          onClick={() =>
            navigate("/profile", {
              state: { id: post?.useRouteId, email: post.userEmail },
            })
          }
        >
          {post.userName}
        </p>
        <p className="timpStamp">{post.timeStamp}</p>
        <p className="status">{post.status}</p>
        <div className="descriptionContainer">
          <div className="socialAction">
            <button className="socialBtn">
              <img src="/images/like-icon.svg" alt="like" />
              <span>Like</span>
            </button>
            <button className="socialBtn">
              <img src="/images/comment-icon.svg" alt="comment" />
              <span>Comment</span>
            </button>
            <button className="socialBtn">
              <img src="/images/repost-icon1.svg" alt="repost" />
              <span>Repost</span>
            </button>
            <button className="socialBtn">
              <img src="/images/send-icon.svg" alt="like" />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
