import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle } from "../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  console.log("🚀 ~ Login ~ user:", user);

  const dispatch = useDispatch();

  const handleLoginwithGoogle = async () => {
    try {
      const users = await loginWithGoogle();
      console.log(users);
      dispatch(users);
    } catch (error) {
      console.log(error);
    }
    // dispatch();
  };

  return (
    <div className="container">
      <nav className="nav">
        <Link to={"/"}>
          <img src="/images/linkedinLogo.svg" alt="" />
        </Link>

        <div>
          <button className="joinBtn">Join now</button>
          <button className="signInBtn" onClick={() => navigate("/signin")}>
            Sign in
          </button>
        </div>
      </nav>
      <section className="section">
        <div className="hero">
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.png" alt="hero-image" />
        </div>

        <form action="" className="formMain">
          <div className="googleLogin" onClick={handleLoginwithGoogle}>
            <img src="/images/google.svg" alt="google-logo" />
            Sign in with Google
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
