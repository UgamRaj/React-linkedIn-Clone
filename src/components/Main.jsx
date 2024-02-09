// import ModalComponent from "../common/Modal/ModalComponent";
import PostStatus from "../common/PostUpdate/PostStatus";
import "./main.css";

const Main = ({ currentUser }) => {
  // console.log("🚀 ~ Main ~ currentUser:", currentUser);
  return (
    <div className="main">
      <PostStatus currentUser={currentUser} />
      {/* 
      <div>
        <div className="articleContainer">
          <div className="sharedActor">
            <a>
              <img src="/images/user.svg" alt="user" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipses.svg" alt="elipsis" />
            </button>
          </div>
          <div className="descriptionContainer">
            <div className="sharedImage">
              <a>
                <img src="/images/shared-image.jpeg" alt="shared-image" />
              </a>
            </div>

            <ul className="socialMediaHandle">
              <li>
                <button>
                  <img
                    src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                    alt="like"
                  />
                  <span>75</span>
                </button>
              </li>
              <li>
                <a>2 comments</a>
              </li>
            </ul>
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
      </div> */}
    </div>
  );
};

export default Main;
