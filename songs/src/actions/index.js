//Action Creator

export const selectSong = song => {
  //  Return a action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
