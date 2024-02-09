import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfilePopup from "../common/ProfilePopup/ProfilePopup";
import { getAllUsers } from "../firebase/firestoreApi";

const NavBar = ({ currentUser }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  // const [isSearch, setIsSearch] = useState(false);
  const [users, setUsers] = useState([]);
  // const [filteredUsers, setFilteredUsers] = useState([]);
  // const [searchInput, setSearchInput] = useState("");
  let navigate = useNavigate();

  const gotoRoute = (route) => {
    navigate(route);
  };
  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <>
      <div className="navContainer">
        <div className="content">
          <div className="homeLogo">
            <Link to={"/home"}>
              <img src="/images/home-logo.svg" alt="home-logo" />
            </Link>
          </div>
          <div className="searchBar">
            <div>
              <input type="text" placeholder="Search " />
            </div>
            <div className="searchIcon">
              <img src="/images/search-icon.svg" alt="" />
            </div>
          </div>
          <nav className="navMenu">
            <ul>
              <li className="active">
                <Link to={"/home"}>
                  <img src="/images/nav-home.svg" alt="" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to={"/profile"}>
                  <img src="/images/nav-network.svg" alt="" />
                  <span>My Network</span>
                </Link>
              </li>
              <li>
                <Link>
                  <img src="/images/nav-jobs.svg" alt="" />
                  <span>Jobs</span>
                </Link>
              </li>
              <li>
                <Link>
                  <img src="/images/nav-messaging.svg" alt="" />
                  <span>Messaging</span>
                </Link>
              </li>
              <li>
                <Link>
                  <img src="/images/nav-notifications.svg" alt="" />
                  <span>Notifications</span>
                </Link>
              </li>
              <li className="userProfileIcon" onClick={displayPopup}>
                <Link>
                  <img src="/images/user.svg" alt="" />
                  <span>Me</span>
                  <img src="/images/down-icon.svg" alt="" />
                </Link>
              </li>

              <li>
                <Link>
                  <img src="/images/nav-work.svg" alt="" />
                  <span>For Bussiness</span>
                  <img src="/images/down-icon.svg" alt="" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {popupVisible && <ProfilePopup />}
    </>
  );
};

export default NavBar;
