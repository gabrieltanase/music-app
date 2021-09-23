import { IAlbum } from "../../models/Album";

interface IAlbumItemProps  {
  album: IAlbum;
  handleSelectedAlbum: any;
}

function AlbumItem({ album, handleSelectedAlbum }: IAlbumItemProps)  {

  return (
    <div className="card h-100" 
      onClick={() => handleSelectedAlbum(album)}>
      <img src={album.cover_medium} className="card-img-top shadow-sm" alt={album.title} />
      <div className="card-body text-center">
        <p className="m-1">{album.title}</p>
      </div>
    </div>
  )
}

export default AlbumItem;