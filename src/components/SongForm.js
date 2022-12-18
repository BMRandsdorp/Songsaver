import React from "react";
import { useDispatch } from "react-redux";
import { addSong } from "../actions";

function SongForm() {
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const songTitle = e.target.title.value;
    const songArtist = e.target.artist.value;
    const songGenre = e.target.genre.value;
    const songRating = e.target.rating.value;
    if (
      songTitle !== "" &&
      songArtist !== "" &&
      songGenre !== "DEFAULT" &&
      songRating !== "DEFAULT"
    ) {
      dispatch(addSong(songTitle, songArtist, songGenre, songRating));
      e.target.reset();
    } else {
      alert("Please fill in all fields");
    }
  };
  return (
    <div className="song-overview">
      <form id="SongForm" onSubmit={onSubmit}>
        <input type="text" id="title" placeholder="Title"></input>
        <input type="text" id="artist" placeholder="Artist"></input>
        <select id="genre" defaultValue={`DEFAULT`}>
          <option value="DEFAULT" disabled hidden>
            Genre
          </option>
          <option value="rock">rock</option>
          <option value="pop">pop</option>
          <option value="classical">classical</option>
          <option value="jazz">jazz</option>
          <option value="blues">blues</option>
        </select>
        <select id="rating" defaultValue={`DEFAULT`}>
          <option value="DEFAULT" disabled hidden>
            Rating 1-5
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Add to list</button>
      </form>
    </div>
  );
}
export default SongForm;
