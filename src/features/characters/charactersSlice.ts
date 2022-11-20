import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Character } from "../../types/Character";
import { fetchCharactersAsync } from "./charactersAsyncActions";

export interface CharactersState {
  value: Character[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
  status: "idle" | "loading" | "failed";
  errorMessage: string;
  successMessage: string;
}

const initialState: CharactersState = {
  value: [],
  totalCount: 0,
  totalPages: 0,
  currentPage: 1,
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
        state.totalCount = action.payload?.data?.characters?.info?.count
        state.totalPages = action.payload?.data?.characters?.info?.pages
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
export const selectCharactersStatus = ( state: RootState) => state.characters.status
export const selectCharacterTotalPages = (state: RootState) => state.characters.totalPages

export default charactersSlice.reducer;
