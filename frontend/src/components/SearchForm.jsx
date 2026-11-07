import "../styles/SearchForm.css";

// Search form component
function SearchForm({
  searchTerm,
  setSearchTerm,
  mediaType,
  setMediaType,
  handleSearch,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form
      className="row g-3 align-items-center search-panel"
      onSubmit={handleSubmit}
    >
      {/* Search text input */}
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Search for media..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Media type dropdown */}
      <div className="col-md-3">
        <select
          className="form-select"
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="music">Music</option>
          <option value="podcast">Podcast</option>
          <option value="audiobook">Audiobook</option>
          <option value="software">Software</option>
          <option value="ebook">eBook</option>
        </select>
      </div>

      {/* Search button */}
      <div className="col-md-3">
        <button
          type="submit"
          className="btn search-button w-100"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;