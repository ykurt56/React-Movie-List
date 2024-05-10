import React from "react";
import { FaTrash } from "react-icons/fa";
import useMovieStore from "../store/MovieStore";
import Footer from "../components/Footer";

function WatchLater() {
  const watchLater = useMovieStore((state) => state.watchLater);
  const setWatchLater = useMovieStore((state) => state.setWatchLater);

  const removeFromWatchLater = (movie) => {
    const updatedWatchLater = watchLater.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    setWatchLater(updatedWatchLater);
  };

  if (!watchLater || watchLater.length === 0) {
    return (
      <div className="not-found">
        Henüz izlemek için kaydedilmiş bir film yok.
      </div>
    );
  }

  return (
    <div className="watch-later-container">
      <h2 className="card-title">İZLENECEKLER</h2>
      <div className="cards">
        {watchLater.map((movie, index) => (
          <div className="card" key={index}>
            <div className="overlay">
              <div className="overlay-text">
                <div className="button-container">
                  <button
                    className="remove-button"
                    onClick={() => removeFromWatchLater(movie)}
                  >
                    <FaTrash />
                  </button>
                </div>
                <h3 className="card-title">{movie.Title}</h3>
                <p className="card-year">{movie.Year}</p>
              </div>
            </div>
            <img className="card-img" src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default WatchLater;
