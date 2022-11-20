import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../index";
import { fetchCharacters } from "./charactersApi";

export const fetchCharactersAsync = createAsyncThunk(
    'characters/fetchCharacters',
    async ({page}: {page: number}, { rejectWithValue }) => {
        try {
            const res = await client.query({
                query: fetchCharacters,
                variables: {
                    page
                }
            })
            return res;
        } catch (err) {
            console.log('err')
        }
    }
)