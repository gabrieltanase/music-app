import React from "react";
import { IArtist } from "../../models/Artist";

interface IOptionsListProps {
  artists: Array<IArtist>;
  handleSelectedOption: any;
}

function OptionsList({ artists, handleSelectedOption }: IOptionsListProps) {
  return (
    <div className="position-absolute mt-1 p-3 w-100 overlay-index" 
      style={{ backgroundColor: 'var(--bs-secondary)' }}>
      <p className="">Search results</p>
      <ul className="list-group list-group-flush ">
        {
          artists.map((artist: IArtist) =>
            <li
              className="list-group-item list-group-item-action"
              key={artist.id}
              onClick={() => handleSelectedOption(artist)}>
              {artist.name}
            </li>)
        }
      </ul>
    </div>
  )
}

export default OptionsList;