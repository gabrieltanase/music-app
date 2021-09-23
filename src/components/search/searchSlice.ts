import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IArtist } from '../../models/Artist';
import { searchArtists } from '../../services/search.service';

export interface SearchState {
  artists: any | null; // fix the type here
  activeArtist: IArtist | null;
  status: 'idle' | 'loading' | 'failed';
  error: any;
}

const initialState: SearchState = {
  artists: null,
  activeArtist: null,
  status: 'idle',
  error: null
}


export const searchArtistsAsync = createAsyncThunk(
  'search/artists',
  async (query: string) => {
    const response = await searchArtists(query);
    return response.data.data;
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearArtists: (state) => {
      state.artists = null
    },
    setActiveArtist: (state, action: PayloadAction<IArtist>) => {
      state.activeArtist = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchArtistsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchArtistsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.artists = action.payload;
      });
  }
});

export const { clearArtists, setActiveArtist } = searchSlice.actions;

// SELECTORS
export const selectArtists = (state: RootState) => state.search.artists;
export const selectStatus = (state: RootState) => state.search.status;
export const selectActiveArtist = (state: RootState) => state.search.activeArtist;


export default searchSlice.reducer;