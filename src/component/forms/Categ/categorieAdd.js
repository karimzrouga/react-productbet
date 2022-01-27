export default function CategorieAdd({
  upcategorie,
  handleSubmit,
  handleChange,
  cancel,
  onFileChange,
}) {
  // eslint-disable-next-line no-unused-vars
  let { name} =
    upcategorie;

  return (
    
    <div className="col-md-6 offset-md-3 mt-5">
<h1>Add new categorie</h1>
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
          <label> Image</label>
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
