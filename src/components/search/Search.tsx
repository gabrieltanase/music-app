import React, { ChangeEvent, useState } from "react";
import OptionsList from "./OptionList";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  searchArtistsAsync,
  selectArtists,
  clearArtists,
  setActiveArtist
} from './searchSlice';
import { debounce } from "lodash";
import { IArtist } from "../../models/Artist";

function SearchComponent() {

  const artists = useAppSelector(selectArtists);
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState<string>('');

  const handleOnChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);

    if (!value) {
      dispatch(clearArtists());
      return;
    }

    dispatch(debounce(searchArtistsAsync(value), 300));
  }

  const handleSelectedOption = (artist: IArtist) => {
    // set the input value
    setInputValue(artist.name);
    // set selected artist
    dispatch(setActiveArtist(artist));
    // dispath clear artists
    dispatch(clearArtists());
  }

  return (
    <section className="row mb-5">
      <div className="col-md-10 col-sm-12">
        <div className="position-relative">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Search here"
            aria-label="Search here"
            value={inputValue}
            onChange={handleOnChange}
          />
          {
            artists && artists.length
              ? <OptionsList artists={artists} handleSelectedOption={handleSelectedOption} />
              : null
          }
        </div>
      </div>
      <div className="col-md-2">
        <button className="btn btn-lg btn-primary w-100">SEARCH</button>
      </div>
    </section>
  );
}

export default SearchComponent;