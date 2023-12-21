// Home.jsx
import { useState } from "react";
import Form from "../Components/Form";

function Home() {
  const [bookData, setBookData] = useState(null);
  const [selectedCoverType, setSelectedCoverType] = useState("select");
  const [selectedCategory, setSelectedCategory] = useState("select");
  const [errorMessage, setErrorMessage]=useState(null)

  


  const fetchData = async (coverType, category) => {
    const apiUrl = `https://api.nytimes.com/svc/books/v3/lists/current/${coverType}-${category}.json?api-key=uKtQimMDWaJKpvlcydyoRgLnrgAZju5k`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data, "data");
      setBookData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage(true);
    }
  };

  const handleCoverTypeChange = (e) => {
    setSelectedCoverType(e.target.value);
    console.log("clicked 1");
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    console.log("clicked 2");
  };

  return (
    <>
     <Form
  onClickProp={fetchData}
  bookDataProp={bookData}
  selectedCoverTypeProp={selectedCoverType}
  selectedCategoryProp={selectedCategory}
  handleCoverTypeChangeProp={handleCoverTypeChange}
  handleCategoryChangeProp={handleCategoryChange}
  errorMessageProp={ errorMessage}
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
