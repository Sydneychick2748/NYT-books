// Home.jsx
import React, { useState } from "react";
import Form from "../Components/Form";
import ErrorBoundary from "../ErrorBoundary";

function Home() {
  const [bookData, setBookData] = useState(null);
  const [selectedCoverType, setSelectedCoverType] = useState("select");
  const [selectedCategory, setSelectedCategory] = useState("select");

  const fetchData = async (coverType, category) => {
    const apiUrl = `https://api.nytimes.com/svc/books/v3/lists/current/${coverType}-${category}.json?api-key=uKtQimMDWaJKpvlcydyoRgLnrgAZju5k`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      console.log(data, "data");
      setBookData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Optionally handle or log the error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(selectedCoverType, selectedCategory);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "coverType") {
      setSelectedCoverType(value);
    } else if (name === "category") {
      setSelectedCategory(value);
    }
  };

  return (
    <ErrorBoundary fallback="This is an invalid combination. Please refresh the page and try again.">
      <>
        <Form
          onClickProp={handleSubmit}
          selectedCoverTypeProp={selectedCoverType}
          selectedCategoryProp={selectedCategory}
          handleChangeProp={handleInputChange}
        />
        <div className="mapbook-parent-container">
          {bookData &&
            bookData.results.books.map((item, key) => (
              <div className="books-container" key={key}>
                <p>{key + 1}</p>
                <p>{item.title}</p>
                <img src={item.book_image} alt={`Book cover for ${item.title}`} />
              </div>
            ))}
        </div>
      </>
    </ErrorBoundary>
  );
}

export default Home;
