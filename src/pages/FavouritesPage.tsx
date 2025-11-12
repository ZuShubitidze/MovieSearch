import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { removeFavourite } from "@/store/favouritesSlice";

const FavouritesPage = () => {
  // const [favourites, setFavourites] = useState<string[]>(() => {
  //   return JSON.parse(localStorage.getItem("favourites") || "[]");
  // });

  const favourites = useSelector((state: RootState) => state.favourites.list);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = (fav: string) => {
    dispatch(removeFavourite(fav));
  };

  // useEffect(() => {
  //   localStorage.setItem("favourites", JSON.stringify(favourites));
  // }, [favourites]);

  // const handleRemove = (fav: string) => {
  //   setFavourites((prev) => prev.filter((f) => f !== fav));
  // };

  return (
    <section className="px-10 flex flex-col gap-6">
      <ul>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-4xl font-bold pb-6">Favourites:</h2>
            <ul className="flex flex-col gap-8">
              {favourites.map((fav) => (
                <li key={fav} className="flex flex-row gap-10 items-center">
                  <p className="w-1/6">{fav}</p>
                  <Button
                    className="bg-red-500 text-white p-5 hover:bg-black dark:hover:bg-white hover:text-red-500"
                    onClick={() => handleRemove(fav)}
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ul>
    </section>
  );
};

export default FavouritesPage;
