export default function Adddit({
  nBet,
  handleSubmit,
  handleChange,
  cancel,
  onFileChange,
  articles,
}) {
  // eslint-disable-next-line no-unused-vars
  let { name, image, description, initialprix, lastdate, state, listArticle } =
    nBet;

  return (
    <div className="col-md-6 offset-md-3 mt-5">
      <h1>Add Bet</h1>
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
      <div className="form-group">
        <label> Initialprice</label>
        <input
          type="number"
          min={0}
          name="initialprix"
          className="form-control"
          id="exampleInputName"
          value={initialprix}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label> lastdate</label>
        <input
          type="Date"
          name="lastdate"
          className="form-control"
          id="exampleInputName"
          value={lastdate}
          onChange={handleChange}
        />
      </div>
     
   <hr/>
   <strong> Articles</strong>
      {articles ? (
        articles.map((art) => {
          return (
            <div className="form-group" key={art.idArticle}>
              <label> {art.name}</label>
              <input type="checkbox" name="listArt"  value={art.idArticle} onChange={handleChange} />
            </div>
          );
        })
      ) : (
        <></>
      )}
  <hr/>
      <div className="form-group">
        {image ? (
          <div>
            <label> Image</label>
            <img src={"/assets/" + image} alt="logo" width="20%" />
            <br />{" "}
          </div>
        ) : (
          <></>
        )}
        <div className="formField">
          <label>Chose Image </label>
          <input type="file" onChange={onFileChange} accept="image/*" />
        </div>
      </div>

      <br />
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
