import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectActiveArtist } from "../search/searchSlice";
import {
  getAlbumsAsync,
  selectAlbums,
  selectMoreAlbums,
  setActiveAlbum,
  clearActiveAlbum
} from "./albumsSlice";
import AlbumItem from "./AlbumItem";
import { IAlbum } from "../../models/Album";

function AlbumList() {

  const activeArtist = useAppSelector(selectActiveArtist);
  const albums = useAppSelector(selectAlbums);
  const moreAlbums = useAppSelector(selectMoreAlbums);
  const dispatch = useAppDispatch();

  const [viewMore, setViewMore] = useState<boolean>(false);

  useEffect(() => {
    if (activeArtist) {
      dispatch(getAlbumsAsync(activeArtist.id))
      dispatch(clearActiveAlbum());
    }
  }, [activeArtist, dispatch]);

  const handleSelectedAlbum = (album: IAlbum) => {
    dispatch(setActiveAlbum(album));
  }

  const toggleViewMore = () => {
    setViewMore(!viewMore);
  }

  return (
    //  todo: this needs refactor 
    <>
      {
        albums && albums.length ? <section className="row">
          <p className="fs-4 pb-3 mb-3 border-bottom border-secondary text-white">
            Search results for "{activeArtist && activeArtist.name}"
          </p>
          <h3 className="px-4">ALBUMS</h3>
          <div className="d-flex justify-content-start flex-wrap">
            {
              albums.map((album: IAlbum) =>
                <div className="col-md-2 col-sm-12 col-12 mx-3 my-2 flex-fill" key={album.id}>
                  <AlbumItem album={album} handleSelectedAlbum={handleSelectedAlbum} />
                </div>
              )
            }
          </div>
        </section > : null
      }
      {
        //  More albums toggle button
        moreAlbums && moreAlbums.length  ? <button className="btn btn-secondary text-white w-100 my-5"
          onClick={() => toggleViewMore()}>{viewMore ? 'Less albums' : 'More albums'}</button> : null
      }
      {
        // More albums section
        viewMore && moreAlbums?.length ? <section className="row">
          <div className="d-flex justify-content-start flex-wrap">
            {
              moreAlbums.map((album: IAlbum) =>
                <div className="col-md-2 col-sm-12 col-12 mx-3 my-2 flex-fill" key={album.id}>
                  <AlbumItem album={album} handleSelectedAlbum={handleSelectedAlbum} />
                </div>
              )
            }
          </div>
        </section> : null
      }

    </>

  )
}

export default AlbumList;