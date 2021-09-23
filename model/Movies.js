const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema({
  title: String,
  release_date: String,
  poster_path: String,
  overview: String,
});

const Movies = mongoose.models.movies || mongoose.model("movies", MoviesSchema);
export default Movies;
