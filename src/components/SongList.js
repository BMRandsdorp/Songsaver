import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delSong } from "../actions";

function SongList() {
  const dispatch = useDispatch();
  const OnClick = (e) => {
    const SongId = parseFloat(e.target.parentElement.parentElement.id);
    console.log(SongId);
    dispatch(delSong(SongId));
  };

  const songData = useSelector((state) => state.song);
  const songList = songData.track.map((song) => (
    <tr id={song.id} key={song.id} className="listed-song">
      <td className="song-row__item">{song.title} </td>
      <td className="song-row__item">{song.artist} </td>
      <td className="song-row__item">{song.genre} </td>
      <td className="song-row__item">{song.rating} </td>
      <td>
        <button onClick={OnClick}>Remove</button>
      </td>
    </tr>
  ));

  return (
    <table style={{ width: "100%" }}>
      <tbody>{songList}</tbody>
    </table>
  );
}

export default SongList;
