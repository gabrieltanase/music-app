import axios, { AxiosPromise } from "axios";
import { IAlbumsResponse } from "../models/Album";
const BASE_URL = 'http://localhost:8080/api.deezer.com/';

/**
 * Return a list of artist's albums. Represented by an array of Album objects
 * @param artistId number
 * @returns Promise
 */
export const getAlbumsForArtist = (artistId: number): AxiosPromise<IAlbumsResponse> => {
  return axios({
    baseURL: BASE_URL,
    method: 'GET',
    url: `artist/${artistId}/albums`,
    params: {
      limit: 50
    }
  })
}

export const getAlbumTracks = (albumId: number): AxiosPromise<any> => {
  return axios({
    baseURL: BASE_URL,
    method: 'GET',
    url: `album/${albumId}/tracks`
  })
}