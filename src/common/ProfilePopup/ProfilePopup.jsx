import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../firebase/firestoreApi";
import Button from "../Button/Button";
import { onLogout } from "../../firebase/AuthProvider";
import "./ProfilePopup.css";

const ProfilePopup = () => {
  let navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <div className="popup-card">
      <p>{currentUser.firstName + " " + currentUser.lastName}</p>
      <p>{currentUser.headline}</p>
      <Button
        title={"View Profile"}
        onClick={() =>
          navigate("/profile", {
            state: {
              id: currentUser?.id,
            },
          })
        }
      />
      {/* <p className="name">{currentUser?.name}</p>
      <p className="headline">{currentUser?.headline}</p>
      <Button
        title="View Profile"
        onClick={() =>
          navigate("/profile", {
            state: {
              id: currentUser?.id,
            },
          })
        }
      />
      <Button title="Log out" onClick={onLogout} /> */}
    </div>
  );
};

export default ProfilePopup;
