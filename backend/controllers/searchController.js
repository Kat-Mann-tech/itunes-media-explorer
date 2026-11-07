const axios = require("axios");

// Search the iTunes API using a search term and media type
const getSearchResults = async (req, res) => {
  try {
    // Get the search term and media type from the URL query string
    const term = req.query.term;
    const media = req.query.media;

    // Create the parameters object to send to the iTunes API
    const params = {
      term,
      media,
      country: req.query.country || "US",
    };

    // For music searches, return albums rather than individual songs
    if (media === "music") {
      params.entity = "album";
    }

    // Send a request to the iTunes Search API
    const response = await axios.get("https://itunes.apple.com/search", {
      params,
    });

    // cleans the data so it only pulls certain fields
    const results = response.data.results.map((item) => ({
      id: item.collectionId || item.trackId,
      mediaType: media,
      title: item.collectionName || item.trackName,
      creator: item.artistName,
      image: item.artworkUrl100?.replace("100x100", "600x600"),
      releaseDate: item.releaseDate,
      genre: item.primaryGenreName,
    }));

    // Return the mapped results from iTunes as JSON
    res.json(results);
  } catch (error) {
    // Log the error for debugging
    console.error("iTunes API Error:", error.message);

    // Return an error message if the API request fails
    res.status(500).json({
      message: "Error fetching data from iTunes",
    });
  }
};

// Export the controller function for use in the routes file
module.exports = {
  getSearchResults,
};
