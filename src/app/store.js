import { configureStore } from "@reduxjs/toolkit";
import SuggestionReducer from "../features/suggestion/SuggestionSlice";
import RoadMapReducer from "@/features/roadmap/RoadMapSlice";

export const store = configureStore({
  reducer: {
    suggestion: SuggestionReducer,
    roadmap: RoadMapReducer,
  },
});
