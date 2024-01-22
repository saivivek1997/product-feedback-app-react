import Button from "@/components/ui/Button";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { addComments } from "./SuggestionSlice";

const StyledCommentForm = styled.div`
  background-color: #fff;
  padding: 32px;
  border-radius: 10px;
  margin-top: 24px;
  .comment-heading {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.25px;
    margin: 24px 0px;
  }
  .comment-input {
    input {
      all: unset;
      background-color: #f7f8fd;
      width: 90%;
      padding: 16px;
      height: 80px;
      margin-bottom: 16px;
    }
    .comment-details {
      display: flex;
      justify-content: space-between;
      font-size: 15px;
      color: var(--dark-blue-grey-color);
    }
  }
`;
function CommentForm() {
  const [commentText, setCommentText] = useState("");
  const { id } = useParams();
  const state = useSelector((state) => state.suggestion);

  const dispatch = useDispatch();

  const handleComment = () => {
    setCommentText("");
    dispatch(
      addComments({
        id: +id,
        comment: {
          id: new Date().getMilliseconds(),
          content: commentText,
          user: {
            ...state.currentUser,
          },
        },
      })
    );
  };
  return (
    <StyledCommentForm>
      <h2 className="comment-heading">Add Comment</h2>
      <div className="comment-input">
        <input
          type="text"
          onChange={(event) => setCommentText(event.target.value)}
          value={commentText}
        />
        <div className="comment-details">
          <p>250 Characters left</p>
          <Button bgColor={"#ad1fea"} handleButton={handleComment}>
            Post Comment
          </Button>
        </div>
      </div>
    </StyledCommentForm>
  );
}

export default CommentForm;
