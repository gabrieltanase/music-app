import axios, { AxiosPromise } from "axios";
import { IArtistsResponse } from "../models/Artist";
const BASE_URL = 'http://localhost:8080/api.deezer.com/';

/**
 * Search artists
 * @param keyword string - keyword to search
 * @returns Promise
 */
export const searchArtists = (keyword: string): AxiosPromise<IArtistsResponse> => {
  return axios({
    baseURL: BASE_URL,
    method: 'GET',
    url: 'search/artist',
    params: {
      q: keyword,
    }
  })
}