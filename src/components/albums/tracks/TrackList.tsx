import React from "react";
import { ITrack } from "../../../models/Album";
import TrackItem from "./TrackItem";

interface ITrakListProps {
  tracks: Array<ITrack>,
  releaseDate: string
}

function TrackList({ tracks, releaseDate }: ITrakListProps) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Artist</th>
          <th scope="col">Time</th>
          <th scope="col">Released</th>
        </tr>
      </thead>
      <tbody>
        {
          tracks
            ? tracks.map((track: ITrack) => {
              // todo: this can be improved when only one disc is available 
              return track.track_position === 1 ?
                <>
                  <tr>
                    <td>&nbsp;</td>
                    <td>Disk {track.disk_number}</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <TrackItem item={track} releaseDate={releaseDate} key={track.id} />
                </> : <TrackItem item={track} releaseDate={releaseDate} key={track.id} />
            })
            : null
        }
      </tbody>
    </table>
  )
}

export default TrackList;