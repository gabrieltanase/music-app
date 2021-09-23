export interface IArtist {
  id: number;
  link: string;
  name: string;
  nb_album: number;
  nb_fan: number;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
}

export interface IArtistsResponse {
  data: any; // fix the type here
  next: string;
  total: number;
}