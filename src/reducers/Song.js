const initialState = {
  track: [],
};

function newSongId(track) {
  const maxId = track.reduce((maxId, track) => Math.max(track.id, maxId), -1);
  return maxId + 1;
}

const SongListReducer = (state = initialState, action) => {
  switch (action.type) {
    case `ADDSONG`:
      return {
        ...state,
        track: [
          ...state.track,
          {
            id: newSongId(state.track),
            title: action.payload.title,
            artist: action.payload.artist,
            genre: action.payload.genre,
            rating: action.payload.rating,
          },
        ],
      };
    case `DELETESONG`:
      const trackId = action.payload;
      return {
        ...state,
        track: state.track.filter((track) => track.id !== trackId),
      };
    default:
      return state;
  }
};

export default SongListReducer;
