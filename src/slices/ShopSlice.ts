import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialStateInterface = {
  activeShop: string;
};

const initialState: InitialStateInterface = {
  activeShop: "",
};

const ShopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    changeActiveShop: (state, action: PayloadAction<string>) => {
      state.activeShop = action.payload;
    },
  },
});

export const SelectShopState = (state: RootState) => state.shop;
export const SelectActiveShop = (state: RootState) => SelectShopState(state).activeShop;

export const { changeActiveShop } = ShopSlice.actions;

export default ShopSlice.reducer;
