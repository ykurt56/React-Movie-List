import React from "react";
import { FaClock, FaHeart } from "react-icons/fa";
import useMovieStore from "../store/MovieStore";

function Movie({ response }) {
  const favorites = useMovieStore((state) => state.favorites);
  const setFavorites = useMovieStore((state) => state.setFavorites);

  const watchLater = useMovieStore((state) => state.watchLater);
  const setWatchLater = useMovieStore((state) => state.setWatchLater);

  const isAlreadyAdded = (movie, list) => {
    return list.some((item) => item.imdbID === movie.imdbID);
  };

  const addToFavorites = (movie) => {
    if (!isAlreadyAdded(movie, favorites)) {
      setFavorites([...favorites, movie]);
    } else {
      console.log("Bu film zaten favorilere eklenmiş.");
    }
  };

  const addToWatchLater = (movie) => {
    if (!isAlreadyAdded(movie, watchLater)) {
      setWatchLater([...watchLater, movie]);
    } else {
      console.log("Bu film zaten izleme listesine eklenmiş.");
    }
  };

  if (
    !response ||
    response.Response === "False" ||
    !response.Search ||
    response.Search.length === 0
  ) {
    return (
      <div className="not-found">Aradığınız Dizi veya film bulunamadı.</div>
    );
  }

  return (
    <div className="cards">
      {response.Search.map((movie, index) => (
        <div className="card" key={index}>
          <div className="overlay">
            <div className="overlay-text">
              <div>
                <div className="button-container">
                  <button
                    className="watch-later-button"
                    onClick={() => addToWatchLater(movie)}
                    disabled={isAlreadyAdded(movie, watchLater)}
                  >
                    {isAlreadyAdded(movie, watchLater) ? (
                      <FaClock style={{ color: "gray" }} />
                    ) : (
                      <FaClock />
                    )}
                  </button>
                  <button
                    className="favorite-button"
                    onClick={() => addToFavorites(movie)}
                    disabled={isAlreadyAdded(movie, favorites)}
                  >
                    {isAlreadyAdded(movie, favorites) ? (
                      <FaHeart style={{ color: "red" }} />
                    ) : (
                      <FaHeart />
                    )}
                  </button>
                </div>
              </div>
              <h1 className="card-title">{movie.Title}</h1>
              <p>{movie.Year}</p>
            </div>
          </div>

          <img className="card-img" src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </div>
  );
}

export default Movie;
