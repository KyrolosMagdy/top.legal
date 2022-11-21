import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../index";
import { Filtiration } from "../../types/Filteration";
import { fetchCharacters } from "./charactersApi";

export interface fetchCharactersParams {
  page: number;
  filter?: Filtiration;
}

export const fetchCharactersAsync = createAsyncThunk(
  "characters/fetchCharacters",
  async ({ page, filter }: fetchCharactersParams, { rejectWithValue }) => {
    try {
      const vars = { page, filter: { ...filter } };
      const res = await client.query({
        query: fetchCharacters,
        variables: {
          ...vars,
        },
      });
      return res;
    } catch (err) {
      console.log("err");
    }
  }
);
