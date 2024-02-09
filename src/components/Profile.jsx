import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../common/Loader/Loader";
import ProfileCompnent from "./ProfileCompnent";
import { auth } from "../firebase/firebase";

const Profile = ({ currentUser }) => {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);

  return loading ? <Loader /> : <ProfileCompnent currentUser={currentUser} />;
};

export default Profile;
