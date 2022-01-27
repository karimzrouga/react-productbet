
          export default function FilterMenu({Auctions,searschSubmit, handlesearsch,search   }) {
    return (
      <ul className="list-group list-group-flush rounded">
        <li className="list-group-item d-none d-lg-block">
          <h5 className="mt-1 mb-2">Browse</h5>
          <div className="d-flex flex-wrap my-2">
          <div className="form-check">
                  <input className="form-check-input" type="radio" checked={search.Auctions==="All"}   value={"All"} name="Auctions" onChange={handlesearsch}/>
                  <label className="form-check-label"  >
                  All
                  </label>
                </div>
          </div>
        </li>
        <li className="list-group-item">
          <h5 className="mt-1 mb-1">Auction</h5>
          <div className="d-flex flex-column">

            {Auctions.map((v, i) => {

              return (
                <div key={i} className="form-check">
                  <input className="form-check-input" type="radio"  value={v} name="Auctions" onChange={handlesearsch}/>
                  <label className="form-check-label"  >
                    {v}
                  </label>
                </div>
              );
            })}
          
          </div>
        </li>
        <li className="list-group-item">
          <h5 className="mt-1 mb-1">State</h5>
          <div className="d-flex flex-column">
         
                <div  className="form-check">
                  <input className="form-check-input" type="radio"  value="false" name="Auctions"  onChange={handlesearsch}/>
                  <label className="form-check-label"  >
                  Closed
                  </label>
                  <br/>
                  <input className="form-check-input"  type="radio" value="true"  name="Auctions"  onChange={handlesearsch}/>
                  <label className="form-check-label"  >
                  Open
                  </label>
                </div>
            
          </div>
        </li>
        <li className="list-group-item">
          <h5 className="mt-1 mb-2">Price Range</h5>
          <div className="d-grid d-block mb-3">
            <div className="form-floating mb-2">
              <input
                type="number"
                className="form-control"
                min={0}
                Value={0}
                name="rmin"
                onChange={handlesearsch}
              />
              <label htmlFor="floatingInput">Min Price</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="number"
                className="form-control"
                Value={0}
                name="rmax"
                onChange={handlesearsch}
              />
              <label htmlFor="floatingInput">Max Price</label>
            </div>
           
          </div>
        </li>
      </ul>
    );
    // <button className="btn btn-dark" onClick={()=>{searschSubmit()}}>Apply</button>
  }