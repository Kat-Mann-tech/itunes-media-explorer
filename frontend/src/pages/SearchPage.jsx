// React hooks
import { useState, useEffect } from "react";

// React Router
import { useOutletContext } from "react-router-dom";

// Axios for API requests
import axios from "axios";

// Components
import NavBar from "../components/NavBar";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

// Search page component
function SearchPage() {
  // Shared state from App
  const {
    searchTerm,
    setSearchTerm,
    mediaType,
    setMediaType,
    results,
    setResults,
    favourites,
    addFavourite,
  } = useOutletContext();

  // Store the JWT token
  const [token, setToken] = useState("");

  // Fetch a token when the page loads
  useEffect(() => {
    fetchToken();
  }, []);

  // Get a JWT token from the backend
  const fetchToken = async () => {
    try {
      const response = await axios.get("/api/token");

      setToken(response.data.token);

    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  // Handle search button click
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `/api/search?term=${searchTerm}&media=${mediaType}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setResults(response.data);
      
    } catch (error) {
      console.error("Search Error:", error);
    }
  };

  return (
    <div className="search-page">
      <NavBar />

      <h1 className="search-heading">Discover Music, Podcasts and More</h1>

      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        mediaType={mediaType}
        setMediaType={setMediaType}
        handleSearch={handleSearch}
      />

      <SearchResults
        results={results}
        favourites={favourites}
        addFavourite={addFavourite}
      />
    </div>
  );
}

export default SearchPage;
