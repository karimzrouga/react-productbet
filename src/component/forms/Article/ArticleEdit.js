export default function Articleedit({
  upArticle,
  handleSubmit,
  handleChange,
  cancel,
  listoption,
  onFileChange,
}) {
  // eslint-disable-next-line no-unused-vars
  let { name, image, description, categorie } = upArticle;

  return (
    <div className="col-md-6 offset-md-3 mt-5">
      <form >
        <h1>Edit  Article</h1>
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
          <br/>
        </div>
        <div className="form-group">
          <label> Categorie:</label>
          <select value={categorie} onChange={handleChange} name="categorie">
            <option>--chose--</option>
            {listoption.map((option) => (
              <option key={option.idCategorie} value={option.idCategorie}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
        <br/>
        Image:
        <div className="p-2 d-flex flex-row align-items-center mb-2">
                              {" "}
                              <div className="d-flex flex-column ml-2">
                                <img
                                  src={"/assets/" + image}
                                  alt="logo"
                                  width="50"
                                  className="rounded-circle"
                                />
                              </div>
                            </div>
          <div classaName="formField">
            <label>Chose Image </label>
            <input type="file" onChange={onFileChange} accept="image/*" />
          </div>
        </div>
        <hr />
        <div>
          <button type="submit" className="btn btn-success btn-space" onClick={
            ()=>{
         handleSubmit()
            }
          }>
            Save
          </button>
          <button
            type="button"
            className="btn btn-primary "
            onClick={() => {
              cancel();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
