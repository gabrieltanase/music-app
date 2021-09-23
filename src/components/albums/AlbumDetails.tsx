import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectActiveAlbum,
  getAlbumTracksAsync,
  selectAlbumTracks
} from "./albumsSlice";
import TrackList from "./tracks/TrackList";

function AlbumDetails() {

  const album = useAppSelector(selectActiveAlbum);
  const tracks = useAppSelector(selectAlbumTracks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (album) {
      dispatch(getAlbumTracksAsync(album.id));
    }
  }, [album, dispatch])

  return (
    <>
      {
        // todo: fix inline styles later
        album ? <section>
          <div className="row position-relative" style={{ top: '5rem' }}>
            <div className="col-md-2">
              <img src={album.cover_medium} className="img-fluid shadow-sm" alt={album.title} />
            </div>
            <h4 className="mt-3 col">{album.title}</h4> 
          </div>

          {/* Track list */}
          <div className="row justify-content-end"
            style={{ zIndex: 5, backgroundColor: 'var(--bs-secondary)' }}
          >
            <div className="col-md-10 offset-md-2">
              <TrackList tracks={tracks} releaseDate={album.release_date} />
            </div>
          </div>
        </section> : null
      }
    </>
  )
}

export default AlbumDetails;