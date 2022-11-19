import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Character } from "../../types/Character";
import { fetchCharactersAsync } from "./charactersAsyncActions";

export interface CharactersState {
  value: Character[];
  status: "idle" | "loading" | "failed";
  errorMessage: string;
  successMessage: string;
}

const initialState: CharactersState = {
  value: [],
  status: "idle",
  errorMessage: "",
  successMessage: "",
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    handleHideCharactersErrorMessages: (state) => {
      state.status = "idle";
      state.errorMessage = "";
    },
    handleHideCharactersSuccessMessage: (state) => {
      state.status = "idle";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharactersAsync.pending, (state) => {
        state.status = 'loading'
    })
    builder.addCase(fetchCharactersAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value = action.payload?.data?.characters?.results?? []
    })
    builder.addCase(fetchCharactersAsync.rejected, (state) => {
        state.errorMessage = 'Error, Please try again later'
    })
  }
});

export const {
  handleHideCharactersErrorMessages,
  handleHideCharactersSuccessMessage,
} = charactersSlice.actions;

export const selectCharacters = (state: RootState) => state.characters.value

export default charactersSlice.reducer;
