import create from "zustand";

const useMovieStore = create((set) => {
  const storedWatchLater = JSON.parse(localStorage.getItem("watchLater")) || [];
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return {
    watchLater: storedWatchLater,
    setWatchLater: (newWatchLater) => {
      set({ watchLater: newWatchLater });
      localStorage.setItem("watchLater", JSON.stringify(newWatchLater));
    },
    favorites: storedFavorites,
    setFavorites: (newFavorites) => {
      set({ favorites: newFavorites });
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    },
  };
});

export default useMovieStore;
