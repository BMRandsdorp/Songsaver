import React from "react";
import { useSelector } from "react-redux";
// useDispatch for delbtn

function SongList() {
  const songData = useSelector((state) => state.song);
  const songList = songData.track.map((song) => (
    <tr key={song.id} className="listed-song">
      <td className="song-row__item">{song.title} </td>
      <td className="song-row__item">{song.artist} </td>
      <td className="song-row__item">{song.genre} </td>
      <td className="song-row__item">{song.rating} </td>
    </tr>
  ));

  // const dispatch = useDispatch(); (for onClick del btn)

  return (
    <table style={{ width: "100%" }}>
      <tbody>{songList}</tbody>
    </table>
  );
}

export default SongList;
