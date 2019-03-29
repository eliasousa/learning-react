import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "No scrubs",
      duration: "4:05"
    },
    {
      title: "All star",
      duration: "2:30"
    },
    {
      title: "I Want it that way",
      duration: "5:02"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
