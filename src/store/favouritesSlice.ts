import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FavouritesState {
  list: string[];
}

const initialState: FavouritesState = {
  list: JSON.parse(localStorage.getItem("favourites") || "[]"),
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<string>) => {
      if (!state.list.includes(action.payload)) {
        state.list.push(action.payload);
        localStorage.setItem("favourites", JSON.stringify(state.list));
      }
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((fav) => fav !== action.payload);
      localStorage.setItem("favourites", JSON.stringify(state.list));
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
