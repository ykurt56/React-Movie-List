import React from "react";
import { FaTrash } from "react-icons/fa";
import useMovieStore from "../store/MovieStore";
import Footer from "../components/Footer";

function Favorite() {
  const favorites = useMovieStore((state) => state.favorites);
  const setFavorites = useMovieStore((state) => state.setFavorites);

  const removeFromFavorites = (movie) => {
    const updatedFavorites = favorites.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    setFavorites(updatedFavorites);
  };

  if (!favorites || favorites.length === 0) {
    return (
      <div className="not-found">Henüz favorilere eklenmiş bir film yok.</div>
    );
  }

  return (
    <div className="fovorites-container">
      <h2 className="card-title">Favoriler</h2>
      <div className="cards">
        {favorites.map((movie, index) => (
          <div className="card" key={index}>
            <div className="overlay">
              <div className="overlay-text">
                <div className="button-container">
                  <button
                    className="remove-button"
                    onClick={() => removeFromFavorites(movie)}
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

export default Favorite;
