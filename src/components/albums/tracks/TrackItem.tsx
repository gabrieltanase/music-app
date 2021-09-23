import React from "react";
import { ITrack } from "../../../models/Album";
import {
  formatDate,
  formatTime,
  truncate
} from "../../../utils";

interface ITrackItemProps {
  item: ITrack;
  releaseDate: string;
}

function TrackItem({ item, releaseDate }: ITrackItemProps) {
  return (
    <tr>
      <th scope="row">{item.track_position}</th>
      <td>{truncate(item.title, 50)}</td>
      <td>{item.artist.name}</td>
      <td>{formatTime(item.duration)}</td>
      <td>{formatDate(releaseDate)}</td>
    </tr>
  )
}

export default TrackItem;