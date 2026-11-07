import "../styles/MediaCard.css";

// Display a single media item
function MediaCard({
  item,
  addFavourite,
  removeFavourite,
  isFavouritePage = false,
  favourites = [],
}) {
  // Check whether this item is already in favourites
  const isFavourite = favourites.some(
    (favourite) => favourite.id === item.id
  );

  return (
    <div className="media-card">
      <img
        src={item.image}
        alt={item.title}
        className="media-card-image"
      />

      <div className="media-card-body">
        <h3 className="media-card-title">
          {item.title}
        </h3>

        <p className="media-card-creator">
          {item.creator}
        </p>

        <p className="media-card-genre">
          {item.genre}
        </p>

        <p className="media-card-date">
          {new Date(item.releaseDate).getFullYear()}
        </p>

        {isFavouritePage ? (
          <button
            className="favourite-button"
            onClick={() => removeFavourite(item.id)}
          >
            Remove from Favourites
          </button>
        ) : (
          <button
            className="favourite-button"
            onClick={() => addFavourite(item)}
            disabled={isFavourite}
          >
            {isFavourite
              ? "Added ✓"
              : "Add to Favourites"}
          </button>
        )}
      </div>
    </div>
  );
}

export default MediaCard;