import "../App.css";

function Form() {
  return (
    <>
      <div className="form-container">
        <h1>Check out the New York Times Best Sellers Lists for Books!</h1>
      </div>

      <form onSubmit="">
        <label>Paperback or Hardcover?</label>
        <select value="" onChange="">
          <option value="">Select A Cover Type</option>
          <option value="paperback">Paperback</option>
          <option value="hardcover">Hardcover</option>
        </select>

        <label>Fiction or NonFiction?</label>
        <select value="" onChange="">
          <option value="">Select A Category</option>
          <option value="paperback">Paperback</option>
          <option value="hardcover">Hardcover</option>
        </select>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;
