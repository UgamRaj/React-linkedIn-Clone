import NavBar from "../components/NavBar";
import LeftSide from "../components/LeftSide";
import Main from "../components/Main";
import RightSide from "../components/RightSide";
import { useMemo, useState } from "react";
import { getCurrentUser } from "../firebase/firestoreApi";

const HomePage = () => {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    //! userData gatting
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <>
      <NavBar />
      <div className="homeMainContainer">
        <div className="mainContainer">
          <LeftSide />
          <Main currentUser={currentUser} />
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default HomePage;
