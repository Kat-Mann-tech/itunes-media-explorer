// React Router
import { useOutletContext } from "react-router-dom";

// Components
import NavBar from "../components/NavBar";
import MediaCard from "../components/MediaCard";

// Favourites page component
function FavouritesPage() {
  // Shared state from App
  const { favourites, removeFavourite } = useOutletContext();

  return (
    <div className="search-page">
      {/* Display navigation at the top of the page */}
      <NavBar />

      {/* Page heading */}
      <h1 className="favourites-heading">Favourites</h1>

      {/* Display a message if there are no favourites */}
      {favourites.length === 0 ? (
        <p>No favourites added yet.</p>
      ) : (
        <div className="row">
          {favourites.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 mb-4">
              <MediaCard
                item={item}
                removeFavourite={removeFavourite}
                isFavouritePage={true}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavouritesPage;
