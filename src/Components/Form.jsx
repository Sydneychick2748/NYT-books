/* eslint-disable react/prop-types */

import "../App.css";

function Form({
  onClickProp,
  selectedCoverTypeProp,
  selectedCategoryProp,
  handleChangeProp,
}) {
  return (
    <>
      <div className="form-container">
        <h1>Check out the New York Times Best Sellers Lists for Books!</h1>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <select
          name="coverType"
          value={selectedCoverTypeProp}
          onChange={handleChangeProp}
        >
          <option value="select">Select A Cover Type</option>
          <option value="paperback">Paperback</option>
          <option value="hardcover">Hardcover</option>
        </select>

        <label>Fiction or NonFiction?</label>
        <select
          name="category"
          value={selectedCategoryProp}
          onChange={handleChangeProp}
        >
          <option value="select">Select A Category</option>
          <option value="fiction">Fiction</option>
          <option value="nonfiction">NonFiction</option>
        </select>

        <div>
          <button type="submit" onClick={onClickProp}>
            Click
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
