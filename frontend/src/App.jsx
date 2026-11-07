// React state
import { useState } from "react";

// React Router outlet
import { Outlet } from "react-router-dom";

// Global styles
import "./styles/App.css";

// Root application component
function App() {
  // Store the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Store the selected media type
  const [mediaType, setMediaType] = useState("all");

  // Store search results
  const [results, setResults] = useState([]);

  // Store favourite items
  const [favourites, setFavourites] = useState([]);

  // Add an item to favourites
  const addFavourite = (item) => {
    setFavourites((currentFavourites) => {
      // Prevent duplicate favourites
      const alreadyExists = currentFavourites.some(
        (favourite) => favourite.id === item.id
      );

      if (alreadyExists) {
        return currentFavourites;
      }

      return [...currentFavourites, item];
    });
  };

  // Remove an item from favourites
  const removeFavourite = (itemId) => {
    setFavourites((currentFavourites) =>
      currentFavourites.filter(
        (favourite) => favourite.id !== itemId
      )
    );
  };

  return (
    <div className="container">

      {/* Render whichever page is currently active */}
      <Outlet
        context={{
          searchTerm,
          setSearchTerm,
          mediaType,
          setMediaType,
          results,
          setResults,
          favourites,
          addFavourite,
          removeFavourite,
        }}
      />

    </div>
  );
}

export default App;