import { useState, useMemo } from "react";
import NavBar from "../components/NavBar";
import { getCurrentUser } from "../firebase/firestoreApi";
import Profile from "../components/Profile";

const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <>
      <NavBar currentUser={currentUser} />
      <Profile currentUser={currentUser} />
    </>
  );
};

export default ProfilePage;
