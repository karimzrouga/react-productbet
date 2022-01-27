export default function Categfilter({categ})
{
    return (
        <div className="col-lg-3 d-none d-lg-block">
        <select
          className="form-select"
          aria-label="Default select example"
          defaultValue=""
        >
          <option value="">All Bets</option>
          <option value="1">A</option>
          <option value="2">B</option>
          <option value="3">C</option>
        </select>
      </div>
    );
}