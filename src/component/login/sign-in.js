import "./../../Styles/login.css";
import HomeNavbar from "../home/layout/navbar";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import Footer from "../home/layout/Footer";

export default function Signin({ user, handleChange, handleSubmit,inmod }) {
  let { username, password } = user;
  return (
    <div>
    <section className="sign-in">
      <HomeNavbar />
      <div className="containerl">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src="/in.jpg" alt={"img"} />
            </figure>
            <Link to="/up">
              {" "}
              <a href="f" className="signup-image-link">
                Create an account
              </a>
            </Link>
          </div>

          <div className="signin-form">
            <h2 className="form-title">Sign In</h2>
            <form className="register-form" id="login-form">
              <div className="form-groups">
                <label className="labels">
                  <i className="fa fa-user"></i>
                </label>
                <input
                  className="inputk"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-groups">
                <label className="labels">
                  <i className="fa fa-lock"></i>
                </label>
                <input
                  className="inputk"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                />
              </div>

              <div className="form-groups form-button">
                <button
                  type="button"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  onClick={()=>{inmod();
                  handleSubmit();
                  }}
                >
                  {" "}
                  Log in
                </button>
              </div>
            </form>
            <div className="social-login">
              <span className="social-labels">Or login with</span>
              <ul className="socials">
                <li>
                  <a href="f">
                    <i className="fa fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="f">
                    <i className="fa fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a href="f">
                    <i className="fa fa-google"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}
