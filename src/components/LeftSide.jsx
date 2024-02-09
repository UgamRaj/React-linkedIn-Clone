import "./styless.css";

const LeftSide = () => {
  return (
    <div className="leftSide">
      <div className="artCard">
        <div className="userInfo">
          <div className="cardBackground"></div>
          <a>
            <div className="photo"></div>
            <div className="link">Welcome, there!</div>
          </a>
          <a>
            <div className="addPhotoText">Add a Photo</div>
          </a>
        </div>
        <div className="widget">
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="widget" />
          </a>
        </div>
        <div className="item">
          <span>
            <img src="/images/item-icon.svg" alt="item" />
            My item
          </span>
        </div>
      </div>

      <div className="leftBottom">
        <div className="communityCard">
          <a>
            <span>Groups</span>
          </a>
          <a>
            <span>
              Events
              <img src="/images/plus-icon.svg" alt="plus" />
            </span>
          </a>
          <a>
            <span>Follow hashtags</span>
          </a>
          <a>
            <span>Discover more</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
