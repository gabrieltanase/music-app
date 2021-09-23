export interface IAlbum {
  cover: string;
  cover_big: string;
  cover_medium: string;
  cover_small: string;
  cover_xl: string;
  explicit_lyrics: boolean;
  fans: number;
  genre_id: number;
  id: number;
  link: string;
  md5_image: string;
  record_type: string;
  release_date: string;
  title: string;
  tracklist: string;
}

interface ITrackArtist {
  id: number;
  name: string;
  tracklist: string;
  type: string;

}

export interface ITrack {
  artist: ITrackArtist
  disk_number: number;
  duration: number;
  explicit_content_cover: number;
  explicit_content_lyrics: number;
  explicit_lyrics: boolean;
  id: number;
  isrc: string;
  link: string;
  md5_image: string;
  preview: string;
  rank: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  track_position: number;
}

export interface IAlbumsResponse {
  data: any; // fix the type here
  total: number;
}