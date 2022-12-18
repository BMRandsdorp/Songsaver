import SongListReducer from "./Song";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  song: SongListReducer,
});

export default allReducers;
