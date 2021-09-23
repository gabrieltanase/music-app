import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";
import { IAlbum } from "../../models/Album";
import { getAlbumsForArtist, getAlbumTracks } from "../../services/albums.service";


export interface AlbumsState {
  albums: Array<IAlbum> | null;
  moreAlbums: Array<IAlbum> | null;
  activeAlbum: IAlbum | null;
  albumTracks: any | null;
  status: 'idle' | 'loading' | 'failed';
  error: any;
}

const initialState: AlbumsState = {
  albums: null,
  moreAlbums: null,
  activeAlbum: null,
  albumTracks: null,
  status: 'idle',
  error: null
}

export const getAlbumsAsync = createAsyncThunk(
  'albums/fetch',
  async (artistId: number) => {
    const response = await getAlbumsForArtist(artistId);
    return response.data.data
  }
);

export const getAlbumTracksAsync = createAsyncThunk(
  'albums/tracks',
  async (albumId: number) => {
    const response = await getAlbumTracks(albumId);
    return response.data.data
  }
);

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    setActiveAlbum: (state, action: PayloadAction<IAlbum>) => {
      state.activeAlbum = action.payload
    },
    clearActiveAlbum: (state) => {
      state.activeAlbum = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAlbumsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAlbumsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.albums = action.payload.slice(0, 5);
        state.moreAlbums = action.payload.slice(6);
      })
      .addCase(getAlbumTracksAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAlbumTracksAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.albumTracks = action.payload;
      })
  }
});

export const { setActiveAlbum, clearActiveAlbum } = albumsSlice.actions;

// SELECTORS
export const selectAlbums = (state: RootState) => state.albums.albums;
export const selectMoreAlbums = (state: RootState) => state.albums.moreAlbums;
export const selectActiveAlbum = (state: RootState) => state.albums.activeAlbum;
export const selectAlbumTracks = (state: RootState) => state.albums.albumTracks;

export default albumsSlice.reducer;
