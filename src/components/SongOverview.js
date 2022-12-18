import SongForm from "./SongForm";
import SongList from "./SongList";

function SongOverview() {
  return (
    <div>
      <SongForm />
      <table style={{ width: "100%" }}>
        <thead>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
        </thead>
      </table>
      <SongList />
    </div>
  );
}

export default SongOverview;
