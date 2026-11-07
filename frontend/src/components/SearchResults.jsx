import MediaCard from "./MediaCard";

// Search results component
function SearchResults({
  results,
  addFavourite,
  favourites,
}) {
  return (
    <div className="results-section">
      <h2 className="results-heading">Results</h2>

      {results.length === 0 ? (
        <p>No results yet.</p>
      ) : (
        <div className="row">
          {results.map((item) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 mb-4"
            >
              <MediaCard
                item={item}
                addFavourite={addFavourite}
                favourites={favourites}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
