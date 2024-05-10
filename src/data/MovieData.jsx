import { useState } from "react";
import axios from "axios";
import Search from "../components/Search";
import Movie from "../components/Movie";

function MovieData() {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchChange = async (searchValue) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchValue}&apikey=d550a7b4`
      );

      setResponseData(response.data);
    } catch (error) {
      setError("Arama sırasında bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Search onSearchChange={handleSearchChange} />
      {loading && <p>Yükleniyor...</p>} {error && <p>{error}</p>}{" "}
      {responseData && <Movie response={responseData} />}{" "}
    </div>
  );
}

export default MovieData;
