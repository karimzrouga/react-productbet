export default function Eventedit({
  upEvent,
  handleSubmit,
  handleChange,
  cancel,
  onFileChange,
  bets
}) {
  // eslint-disable-next-line no-unused-vars
  let { name, image, description } = upEvent;

  return (
    <div className="col-md-6 offset-md-3 mt-5">
      <h1>Edit Event</h1>
      <div className="form-group">
        <label> Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          id="exampleInputName"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label> Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          id="exampleInputName"
          value={description}
          onChange={handleChange}
        />
      </div>
      <hr />
      <strong> Bets</strong>
      {bets ? (
        bets.map((bet) => {
          return (
            <div className="form-group" key={bet.idEvent}>
              <label> {bet.name}</label>
              <input
                type="checkbox"
                name="listB"
                value={bet.idBet}
                onChange={handleChange}
              />
            </div>
          );
        })
      ) : (
        <></>
      )}
      <hr />
      <div className="form-group">
        <label> Image</label>
        <img src={"/assets/" + image} alt="logo" width="20%" />
        <br />
        <div classaName="formField">
          <label>Chose Image </label>
          <input type="file" onChange={onFileChange} accept="image/*" />
        </div>
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
          Save
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
