import React from 'react';
import AlbumDetails from './components/albums/AlbumDetails';
import AlbumList from './components/albums/AlbumList';
import './App.scss';
import SearchComponent from './components/search/Search';

function App() {
  return (
    <div className="container my-5">
      <SearchComponent />
      <AlbumList />
      <AlbumDetails />
    </div>
  );
}

export default App;
