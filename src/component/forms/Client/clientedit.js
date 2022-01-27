export default function Clientedit({
  upclient,
  handleSubmit,
  handleChange,
  cancel,
}) {
  // eslint-disable-next-line no-unused-vars
  let { idclient, username, fullname, image, email, phone, solde, adresse } =
    upclient;

  return (
    <div className="col-md-6 offset-md-3 mt-5">
  
      <img
        src={"/"+image}
        alt="logo"
        width="100"
        className="rounded-circle toprigth"
      ></img>
      <div className="form-group">
        <label> Username</label>
        <input
          type="text"
          name="username"
          className="form-control"
          id="exampleInputName"
          value={username}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label> Fullname</label>
        <input
          type="text"
          name="fullname"
          className="form-control"
          id="exampleInputtext1"
          value={fullname}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="Email"
          name="email"
          className="form-control"
          id="exampleInputtext1"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          className="form-control"
          id="exampleInputtext1"
          value={phone}
          onChange={handleChange}
        />
      </div>
      <hr />
      <div className="form-group mt-3">
        <label className="mr-2">Image</label>
        <input type="file" name="image"  />
      </div>
      <div className="form-group">
        <label>Solde</label>
        <input
          type="number"
          name="solde"
          className="form-control"
          id="exampleInputtext1"
          value={solde}
          onChange={handleChange}
          min={0}
        />
      </div>
      <div className="form-group">
        <label>Adresse</label>
        <input
          type="adresse"
          name="adresse"
          className="form-control"
          id="exampleInputtext1"
          value={adresse}
          onChange={handleChange}
        />
      </div>
      <hr />
      <div>
        <button
          type="submit"
          className="btn btn-success btn-space  "
          onClick={() => {
            handleSubmit();
          }}
        >
          Edit
        </button>
        <button
          type="submit"
          className="btn btn-primary "
          onClick={() => {
            cancel();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
