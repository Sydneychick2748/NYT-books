// Home.jsx
import { useState } from "react";
import Form from "../Components/Form";

function Home() {
  const [bookData, setBookData] = useState(null);
  const [selectedCoverType, setSelectedCoverType] = useState("select");
  const [selectedCategory, setSelectedCategory] = useState("select");
  //   const [errorMessage, setErrorMessage]=useState(null)

  const fetchData = async (coverType, category) => {
    const apiUrl = `https://api.nytimes.com/svc/books/v3/lists/current/${coverType}-${category}.json?api-key=uKtQimMDWaJKpvlcydyoRgLnrgAZju5k`;
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        // Handle non-successful response (status other than 200)
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log(data, "data");
      setBookData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error or set an error message
      // setErrorMessage(true);
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
      console.log("Cover type clicked");
    } else if (name === "category") {
      setSelectedCategory(value);
      console.log("Category clicked");
    }
  };

  return (
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
  );
}

export default Home;
