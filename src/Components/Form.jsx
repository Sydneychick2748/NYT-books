/* eslint-disable react/prop-types */

import "../App.css";

function Form({
    onClickProp,
  bookDataProp,
  selectedCoverTypeProp,
  selectedCategoryProp,
  handleCategoryChangeProp,
  handleCoverTypeChangeProp,
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onClickProp(selectedCoverTypeProp, selectedCategoryProp); // Pass selected values to the parent component
      };
      
  return (
    <>
    
      <div className="form-container">
        <h1>Check out the New York Times Best Sellers Lists for Books!</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Paperback or Hardcover?</label>

        <select  value={selectedCoverTypeProp} onChange={handleCoverTypeChangeProp}>
          <option value="select">Select A Cover Type</option>
          <option value="paperback">Paperback</option>
          <option value="hardcover">Hardcover</option>
        </select>

        <label>Fiction or NonFiction?</label>
        <select   value={selectedCategoryProp} onChange={handleCategoryChangeProp}>
          <option value="select">Select A Category</option>
          <option value="fiction">Fiction</option>
          <option value="nonfiction">NonFiction</option>
        </select>

        <div>
          <button type="submit">Click</button>
        </div>
      </form>
      <div className="mapbook-parent-container">
      {bookDataProp &&
        bookDataProp.results.books.map((item, key) => (
          <div className="books-container" key={key}>
            <p> {key + 1}</p>
            <p>{item.title}</p>
            <img src={item.book_image} alt={`Book cover for ${item.title}`} />
          </div>
        ))}
           </div>
    </>
  );
}

export default Form;
