import searchMovies from "@/components/AxiosSearch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { use, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { addFavourite } from "../store/favouritesSlice";

const HomePage = () => {
  // URL States and Search Parameters
  const [movieName, setMovieName] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [year, setYear] = useState<number | null>(null);
  const [searchYear, setSearchYear] = useState<number | null>(0);

  const buildUrl = () => {
    const baseUrl = import.meta.env.VITE_API_URL;
    const params = new URLSearchParams();

    if (searchTerm) {
      params.append("t", searchTerm);
    }
    if (searchYear) {
      params.append("y", searchYear.toString());
    }

    return `${baseUrl}&${params.toString()}`;
  };

  const { data, loading, error } = searchMovies(buildUrl());

  const handleSearch = () => {
    setSearchTerm(movieName);
    setSearchYear(year);
  };

  const favourites = useSelector((state: RootState) => state.favourites.list);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddFavourite = () => {
    if (data && !favourites.includes(data.Title)) {
      dispatch(addFavourite(data.Title));
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 px-10 justify-center items-center">
        <p className="text-2xl font-bold">Search Movies</p>
        {/* Search Bar */}
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Movie Name"
            className="w-80 md:w-96"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Year"
            className="w-80 md:w-96"
            onChange={(e) => setYear(Number(e.target.value))}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        {/* Movie Details */}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && data.Title ? (
          <div className="flex lg:flex-row lg:gap-60 gap:20 flex-col">
            <div className="mt-4 flex flex-col gap-2 bg-purple-950 px-4 pt-4 rounded-lg text-white md:w-150 lg:w-200 w-100">
              <div className="flex flex-row gap-4 pb-4">
                <h2>{data.Title}</h2> <p>({data.Year})</p>
              </div>
              <div className="flex flex-col gap-6">
                <div className=" flex flex-row gap-4">
                  <h3>Genre:</h3>
                  <p>{data.Genre}</p>
                </div>
                <div className=" flex flex-row gap-4">
                  <h3>Plot:</h3>
                  <p>{data.Plot}</p>
                </div>
                <div className=" flex flex-row gap-4">
                  <h3>Director:</h3>
                  <p>{data.Director}</p>
                </div>
                <div className=" flex flex-row gap-4">
                  <h3>Actors:</h3>
                  <p>{data.Actors}</p>
                </div>
                <div className=" flex flex-row gap-4">
                  <h3>Awards:</h3>
                  <p>{data.Awards}</p>
                </div>
                <div className=" flex flex-row gap-4">
                  <h3>Box Office:</h3>
                  <p>{data.BoxOffice}</p>
                </div>
                {data.Ratings && (
                  <div className=" flex flex-row gap-4">
                    <h3>Ratings:</h3>
                    {data.Ratings.map((rating) => (
                      <p key={rating.Source}>
                        {rating.Source}: {rating.Value}
                      </p>
                    ))}
                  </div>
                )}
                {/* Favourites Button */}
                <div>
                  {loading && <p>Loading...</p>}
                  {error && <p>Error: {error}</p>}
                  {data && (
                    <div className="flex lg:flex-row lg:gap-60 gap:20 flex-col">
                      <Button
                        onClick={handleAddFavourite}
                        disabled={favourites.includes(data.Title)}
                      >
                        {favourites.includes(data.Title)
                          ? "Already in favourites"
                          : "Save to Favourites"}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="px-4 pt-4">
              <img
                src={data.Poster}
                alt={data.Title}
                className="w-full md:w-100 sm:w-100"
              />
            </div>
          </div>
        ) : (
          <p className="text-2xl font-bold mt-10">
            Input Movie Name and Year Above
          </p>
        )}
      </div>
    </>
  );
};

export default HomePage;
