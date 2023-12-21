/* eslint-disable react/prop-types */

import "../App.css";

function Form({
  onClickProp,
  bookDataProp,
  selectedCoverTypeProp,
  selectedCategoryProp,
  handleCategoryChangeProp,
  handleCoverTypeChangeProp,
  errorMessageProp,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    onClickProp(selectedCoverTypeProp, selectedCategoryProp);
  };

  console.log(errorMessageProp, "error");
  console.log(bookDataProp, "bookDataProp,");
  return (
    <>
      <div className="form-container">
        <h1>Check out the New York Times Best Sellers Lists for Books!</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <select
          value={selectedCoverTypeProp}
          onChange={handleCoverTypeChangeProp}
        >
          <option value="select">Select A Cover Type</option>
          <option value="paperback">Paperback</option>
          <option value="hardcover">Hardcover</option>
        </select>

        <label>Fiction or NonFiction?</label>
        <select
          value={selectedCategoryProp}
          onChange={handleCategoryChangeProp}
        >
          <option value="select">Select A Category</option>
          <option value="fiction">Fiction</option>
          <option value="nonfiction">NonFiction</option>
        </select>

        <div>
          <button type="submit">Click</button>
        </div>
      </form>
    </>
  );
}

export default Form;
