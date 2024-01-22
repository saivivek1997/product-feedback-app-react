import { createSlice, original } from "@reduxjs/toolkit";

import data from "../../data";
import { getStorage, setStorage } from "../../utils";

const initialState = {
  ...data,
  roadMapNumbers: {},
  suggestionDetails: [],
  singleSuggestionDetail: {},
};

export const SuggestionSlice = createSlice({
  name: "suggestion",
  initialState,
  reducers: {
    getRoadMapNumbers: (state) => {
      state.roadMapNumbers = state.productRequests.reduce((acc, curr) => {
        if (acc[curr.status]) ++acc[curr.status];
        else acc[curr.status] = 1;
        return acc;
      }, {});
    },

    getSuggestionDetails: (state) => {
      state.suggestionDetails = getStorage("product-details").filter(
        (product) => product.status === "suggestion"
      );
    },

    increaseUpvotes: (state, action) => {
      state.suggestionDetails = state.suggestionDetails.map(
        (suggestionDetail) =>
          suggestionDetail.id === action.payload.id
            ? { ...suggestionDetail, upvotes: ++suggestionDetail.upvotes }
            : suggestionDetail
      );

      // increase upvote in product details such that it will handle single suggestion detail
      state.productRequests = getStorage("product-details").map((product) =>
        product.id === action.payload.id
          ? { ...product, upvotes: ++product.upvotes }
          : product
      );

      if (
        state.singleSuggestionDetail.upvotes === 0 ||
        state.singleSuggestionDetail.upvotes
      ) {
        state.singleSuggestionDetail.upvotes = ++state.singleSuggestionDetail
          .upvotes;
      }
      setStorage("product-details", state.productRequests);
    },
    getCategoryFilter: (state, action) => {
      if (action.payload.id === "all") {
        state.suggestionDetails = getStorage("product-details").filter(
          (product) => product.status === "suggestion"
        );
      } else
        state.suggestionDetails = getStorage("product-details").filter(
          (product) =>
            product.category === action.payload.id &&
            product.status === "suggestion"
        );
    },

    getSuggestionDetailsById: (state, action) => {
      state.singleSuggestionDetail = getStorage("product-details")?.find(
        (product) =>
          product.id === +action.payload.id && product.status === "suggestion"
      );
    },

    getMostUpvotes: (state) => {
      state.suggestionDetails = state.suggestionDetails?.sort(
        (a, b) => b.upvotes - a.upvotes
      );
      if (getStorage("product-details"))
        state.productRequests = getStorage("product-details")?.sort(
          (a, b) => b.upvotes - a.upvotes
        );
      else {
        state.productRequests = state.productRequests;
      }
      setStorage("product-details", state.productRequests);
    },

    getLeastVotes: (state) => {
      state.suggestionDetails = state.suggestionDetails?.sort(
        (a, b) => a.upvotes - b.upvotes
      );
      state.productRequests = getStorage("product-details").sort(
        (a, b) => a.upvotes - b.upvotes
      );
      setStorage("product-details", state.productRequests);
    },

    getMostComments: (state) => {
      state.suggestionDetails = state.suggestionDetails.sort((a, b) => {
        return b?.comments?.length - a?.comments?.length;
      });
      state.productRequests = getStorage("product-details").sort(
        (a, b) => b?.comments?.length - a?.comments?.length
      );
      setStorage("product-details", state.productRequests);
    },
    getLeastComments: (state) => {
      state.suggestionDetails = state.suggestionDetails.sort((a, b) => {
        return a?.comments?.length - b?.comments?.length;
      });
      state.productRequests = getStorage("product-details").sort(
        (a, b) => a?.comments?.length - b?.comments?.length
      );
      setStorage("product-details", state.productRequests);
    },

    addFormData: (state, action) => {
      state.productRequests.unshift(action.payload.formData);
      setStorage("product-details", state.productRequests);
    },

    deleteFormData: (state, action) => {
      state.productRequests = state.productRequests.filter(
        (product) => product.id !== action.payload.id
      );
      setStorage("product-details", state.productRequests);
    },

    editFeedback: (state, action) => {
      state.productRequests = state.productRequests.map((product) =>
        product.id === +action.payload.id
          ? { ...product, ...action.payload.formData }
          : product
      );
      setStorage("product-details", state.productRequests);
    },

    addComments: (state, action) => {
      state.productRequests = state.productRequests.map((productRequest) =>
        productRequest.id === action.payload.id
          ? {
              ...productRequest,
              comments: productRequest.comments
                ? [...productRequest.comments, action.payload.comment]
                : [action.payload.comment],
            }
          : productRequest
      );
      setStorage("product-details", state.productRequests);
    },

    addReplyToComments: (state, action) => {
      state.productRequests = state.productRequests.flatMap(
        (productRequest) => {
          return {
            ...productRequest,
            comments: productRequest?.comments?.map((comment) => {
              if (comment.id === action.payload.commentId) {
                return {
                  ...comment,
                  replies: comment.replies
                    ? [
                        ...comment.replies,
                        {
                          id: new Date().getMilliseconds(),
                          content: action.payload.content,
                          replyingTo: action.payload.replyingTo,
                          user: { ...action.payload.user },
                        },
                      ]
                    : [
                        {
                          id: new Date().getMilliseconds(),
                          content: action.payload.content,
                          replyingTo: action.payload.replyingTo,
                          user: { ...action.payload.user },
                        },
                      ],
                };
              } else {
                return comment;
              }
            }),
          };
        }
      );
      setStorage("product-details", state.productRequests);
    },
  },
});

// Action creators are generated for each case reducer function

export const {
  getRoadMapNumbers,
  getSuggestionDetails,
  increaseUpvotes,
  getCategoryFilter,
  getSuggestionDetailsById,
  getMostUpvotes,
  getLeastVotes,
  getMostComments,
  getLeastComments,
  addFormData,
  deleteFormData,
  editFeedback,
  addComments,
  addReplyToComments,
  addReplyToReplies,
} = SuggestionSlice.actions;

export default SuggestionSlice.reducer;
