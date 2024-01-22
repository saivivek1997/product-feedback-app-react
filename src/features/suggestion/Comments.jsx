import React, { Fragment, useState } from "react";
import { CommentStyled, StyledComments } from "./CommentStyles";
import Replies from "./Replies";
import ReplyForm from "./ReplyForm";
import { useDispatch, useSelector } from "react-redux";
import { addReplyToComments } from "./SuggestionSlice";
import useMobileDeviceDetector from "@/hooks/useMobileDeviceDetector";

const Comments = ({ comments }) => {
  const [commentId, setCommentId] = useState(0);
  const [replyText, setReplyText] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.suggestion);
  const { isMobile } = useMobileDeviceDetector();

  function handleReply(id) {
    setCommentId(id);
  }

  function handleChange(event) {
    setReplyText(event.target.value);
  }

  function handleReplyButton(comment) {
    setCommentId(0);
    setReplyText("");
    dispatch(
      addReplyToComments({
        commentId: comment.id,
        content: replyText,
        replyingTo: comment.user.username,
        user: currentUser,
      })
    );
  }
  return comments?.length > 0 ? (
    <StyledComments $isMobile={isMobile}>
      <p className="comment-length">
        <span>{comments?.length}</span> Comments
      </p>

      {comments?.map((comment) => {
        return (
          <Fragment key={comment.id}>
            <CommentStyled $hasReply={comment?.replies?.length > 0}>
              <div className="comment-details row-flex">
                <img src={comment.user.image} />
                <div className="comment-user-details">
                  <p className="name">{comment.user.name}</p>
                  <p className="username">{comment.user.username}</p>
                  <p className="content">{comment.content}</p>
                </div>
                {comment.user.name !== currentUser.name && (
                  <span
                    className="reply"
                    onClick={() => handleReply(comment.id)}
                  >
                    Reply
                  </span>
                )}
              </div>
              {commentId === comment.id && (
                <ReplyForm
                  handleReplyButton={() => handleReplyButton(comment)}
                  replyText={replyText}
                  handleChange={handleChange}
                />
              )}
            </CommentStyled>
            {comment?.replies && (
              <div className="reply-container">
                <Replies
                  replies={comment?.replies}
                  commentLength={comments?.length}
                  commentId={comment.id}
                />
              </div>
            )}
          </Fragment>
        );
      })}
    </StyledComments>
  ) : null;
};

export default Comments;
