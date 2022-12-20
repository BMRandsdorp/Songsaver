export const addSong = (title, artist, genre, rating) => {
  return {
    type: `ADDSONG`,
    payload: { title, artist, genre, rating },
  };
};

export const delSong = (id) => {
  return {
    type: `DELETESONG`,
    payload: id,
  };
};
