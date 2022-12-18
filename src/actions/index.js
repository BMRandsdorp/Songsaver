export const addSong = (title, artist, genre, rating) => {
  return {
    type: `ADDSONG`,
    payload: { title, artist, genre, rating },
  };
};
