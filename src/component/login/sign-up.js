import "./../../Styles/login.css";
import HomeNavbar from "../home/layout/navbar";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import Footer from "../home/layout/Footer";

export default function Signup({ user, handleChange, handleSubmit, upmod }) {
  let { username, Fullname, password, email, adresse } = user;

  return (
    <div>
    <section className="signup">
      <HomeNavbar />
      <div className="containerl">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign Up</h2>
            <form className="register-form">
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
                  <i className="fa fa-user"></i>
                </label>
                <input
                  className="inputk"
                  type="text"
                  name="fulname"
                  placeholder="Fullname "
                  value={Fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-groups">
                <label className="labels">
                  <i className="fa fa-envelope"></i>
                </label>
                <input
                  className="inputk"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={email}
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
              <div className="form-groups">
                <label className="labels">
                  <i className="fa fa-lock"></i>
                </label>
                <input
                  className="inputk"
                  type="password"
                  name="re_pass"
                  placeholder="Repeat your password"
                />
              </div>
              <div className="form-groups">
                <label className="labels">
                  <i className="fa fa-map-marker"></i>
                </label>
                <input
                  className="inputk"
                  type="text"
                  name="adresse"
                  placeholder="Adresse "
                  value={adresse}
                  onChange={handleChange}
                />
              </div>

              <div className="form-groups form-button">
                <button
                  onClick={() => {
                    upmod();
                    handleSubmit();
                  }}
                  type="button"
                  className="form-submit"
                >
                  SingUp
                </button>
              </div>
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img src="/in.jpg" alt="img" />
            </figure>
            <Link to="/in">
              {" "}
              <a href="f" className="signup-image-link">
                I am already member
              </a>{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}
