import "./rightside.css";

const RightSide = () => {
  return (
    <div className="rightSide">
      <div className="followCard">
        <div className="title">
          <h2>LinkedIn News</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </div>
        <ul>
          <li>
            <a>
              <h5>Top newsletters of the week</h5>
              <p>Top news 922 readers</p>
            </a>
          </li>
          <li>
            <a>
              <h5>Top newsletters of the week</h5>
              <p>Top news 922 readers</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSide;
