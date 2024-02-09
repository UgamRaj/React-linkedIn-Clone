import { useEffect, useState } from "react";
// import LeftSide from "./LeftSide";
// import Main from "./Main";
// import NavBar from "./NavBar";
// import RightSide from "./RightSide";
import "./styless.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Loader from "../common/Loader/Loader";
import HomePage from "../pages/HomePage";

const Home = () => {
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      // console.log(res);
      if (!res?.accessToken) {
        navigate("/");
      } else {
        setloading(false);
      }
    });
  }, []);

  return <>{loading ? <Loader /> : <HomePage />}</>;
};

export default Home;
