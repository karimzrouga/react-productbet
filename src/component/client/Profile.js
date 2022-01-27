import "../../Styles/profile.css";
import { useNavigate } from "react-router-dom";
import HomeNavbar from "../home/layout/navbar";
export default function Profile({
  user,
  handleChange,
  handleSubmit,
  editmod,
  onFileChange,
  onFileUpload,
  file,
  filename,
  Lbet,
}) {
  let { username, fullname, password, email, adresse, image, solde, phone } =
    user;
  let navigate = useNavigate();
  var user = JSON.parse(localStorage.getItem("user"));
  let clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
 
  };
  return (
    <div className="container rounded bg-white mt-5">
      <HomeNavbar />
      <div className="row">
        <div className="col-md-4 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              src={"/assets/" + image}
              width="90"
              alt=""
            />
            <span className="font-weight-bold"> Username: {username}</span>
            <span className="text-black-50"> Email: {email}</span>
            <span> Solde :{solde}$</span>
          </div>
          {user && user.role === "admin" ? (
            <button
              class="btn btn-dark"
              onClick={() => {
                navigate("/admin");
              }}
            >
              <i class="fa fa-th"></i> Dashboard
            </button>
          ) : (
            <></>
          )}
          <br />
          <br />
          <br />
          <button
            class="btn btn-secondary"
            onClick={() => {
              localStorage.setItem("Token", null);
              localStorage.setItem("user", null);
              clearCacheData()
              navigate("/");
            }}
          >
            <i className="fa fa-sign-out"></i> Logout
          </button>
        </div>
        <div className="col-md-8">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="text-right"> Profile</h3>
            </div>

            <div className="row mt-2">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  placeholder="Fullname"
                  value={fullname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="address"
                  name="adresse"
                  value={adresse}
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <div className="formField">
              <label>Chose Image </label>
              <input type="file" onChange={onFileChange} accept="image/*" />
            </div>
            <div className="mt-5 text-right">
              <button
                className="btn btn-primary profile-button"
                type="button"
                onClick={() => {
                  handleSubmit();
                  editmod();
                }}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h2 className="Center">List Bets</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">BID Date</th>
            <th scope="col">Image</th>
            <th scope="col">items</th>
            <th scope="col">BID</th>
          </tr>
        </thead>
        <tbody>
          {Lbet.map((e, i) => {
            return (
              <tr>
                <td>{i}</td>
                <td>{e.name}</td>
                <td>{e.finalprix}$</td>
                <td>{e.lastdate}</td>
                <td>
                  <img
                    src={"/assets/" + e.image}
                    alt="logo"
                    width="100"
                    className="rounded-circle"
                  />
                </td>
                <td>{e.listArticle.length}</td>
                <td>{e.listClients.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
    </div>
  );
}
