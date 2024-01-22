import { createSlice } from "@reduxjs/toolkit";

import data from "../../data";
import { getStorage } from "../../utils";
import { original } from "immer";
const initialState = {
  ...data,
  roadMapNumbers: {},
  roadMapDetails: { planned: [], inProgress: [], live: [] },
};

export const RoadMapSlice = createSlice({
  name: "roadmap",
  initialState,
  reducers: {
    getRoadMapDetails: (state) => {
      state.roadMapDetails.planned = getStorage("product-details").filter(
        (roadMapRequest) => roadMapRequest.status === "planned"
      );
      state.roadMapDetails.inProgress = getStorage("product-details").filter(
        (roadMapRequest) => roadMapRequest.status === "in-progress"
      );
      state.roadMapDetails.live = getStorage("product-details").filter(
        (roadMapRequest) => roadMapRequest.status === "live"
      );
    },
    getRoadMapNumbers: (state) => {
      state.roadMapNumbers = getStorage("product-details").reduce(
        (acc, curr) => {
          if (acc[curr.status]) ++acc[curr.status];
          else acc[curr.status] = 1;
          return acc;
        },
        {}
      );
    },
  },
});

// Action creators are generated for each case reducer function

export const { getRoadMapDetails, getRoadMapNumbers } = RoadMapSlice.actions;

export default RoadMapSlice.reducer;
