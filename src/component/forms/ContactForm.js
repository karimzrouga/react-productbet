import React from "react";

export default function ContactForm(props) {
  const { onSubmit, handleChange } = props;
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <label>Your full name</label>
        <div className="col-md-6">
          <input
            name="fullname"
            type="text"
            required={true}
            pattern="[a-zA-Z\s]*"
            maxLength="50"
            className="mb-3"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label>Email</label>

          <input
            name="email"
            type="email"
            required={true}
            maxLength="50"
            className="mb-3"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row">
        <label>Phone</label>
        <div className="col-md-6">
          <input
            name="phone"
            type="number"
            required={true}
            max="999999999999999"
            min="9999"
            className="mb-3"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label>What is your preferred method of being contacted ? </label>

          <select name="ct" onChange={handleChange}  required={true}>
            <option value="phone">Phone</option>
            <option value="email" selected>
              Email
            </option>
          </select>
   
        </div>
      </div>

      <div className="row g-3">
        <strong>Inquiry Type</strong>
        <label>Select one of the following:</label>
        <div className="col-md-12">
          General Inquiry{" "}
          <input  type="checkbox" onChange={handleChange} name="inquiretype"  value={"General Inquiry"}/>{" "}
          <br />
          Bindding Inquiry{" "}
          <input  type="checkbox" onChange={handleChange} name="inquiretype"value={" Bindding Inquiry"} />
          <br />
          Selling Inquiry{" "}
          <input  type="checkbox" onChange={handleChange}name="inquiretype"value={"Selling Inquiry"}  />
          <br />
        </div>
      </div><br/>
      <div class="form-outline">
      <label class="form-label" for="textAreaExample">Message</label>
  <textarea class="form-control" rows="4" name="message" required={true} onChange={handleChange} ></textarea>
  
</div>

      <button type="submit" className="btn btn-primary btn-block mt-3">
        Contact US
      </button>
    </form>
  );
}
