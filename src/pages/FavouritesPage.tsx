import { Button } from "@/components/ui/button";

const FavouritesPage = () => {
  const favourites: string[] = JSON.parse(
    localStorage.getItem("favourites") || "[]"
  );

  return (
    <div className="px-10 flex flex-col gap-6">
      <ul>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-4xl font-bold pb-6">Favourites:</h2>
            <ul className="flex flex-col gap-8">
              {favourites.map((fav) => (
                <li key={fav} className="flex flex-row gap-4 items-center">
                  <p>{fav}</p>
                  <Button
                    className="bg-red-500 text-white p-5 hover:bg-white hover:text-red-500"
                    onClick={() => {
                      localStorage.setItem(
                        "favourites",
                        JSON.stringify(favourites.filter((f) => f !== fav))
                      );
                    }}
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default FavouritesPage;
