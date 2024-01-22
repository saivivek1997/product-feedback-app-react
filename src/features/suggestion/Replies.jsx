import React, { Fragment, useState } from "react";
import { ReplyStyled, StyledReplies } from "./CommentStyles";
import { useDispatch, useSelector } from "react-redux";
import ReplyForm from "./ReplyForm";
import { addReplyToComments } from "./SuggestionSlice";

const Replies = ({ replies, commentId }) => {
  const [replyUserName, setReplyUsername] = useState(0);
  const [replyText, setReplyText] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.suggestion);

  function handleReply(username) {
    setReplyUsername(username);
  }

  function handleChange(event) {
    setReplyText(event.target.value);
  }

  function handleReplyButton(reply) {
    setReplyUsername("");
    setReplyText("");
    dispatch(
      addReplyToComments({
        id: reply.id,
        content: replyText,
        replyingTo: reply.user.username,
        user: currentUser,
        commentId,
      })
    );
  }
  return (
    <StyledReplies>
      {replies?.map((reply) => {
        return (
          <Fragment key={reply.id || reply.user.username}>
            <ReplyStyled>
              <div className="reply-details row-flex">
                <img src={reply.user.image} />
                <div className="reply-user-details">
                  <p className="name">{reply.user.name}</p>
                  <p className="username">{reply.user.username}</p>
                  <p className="content">
                    <span className="reply-username">@{reply.replyingTo}</span>
                    {reply.content}
                  </p>
                </div>
                {reply.user.username !== currentUser.username && (
                  <span
                    className="reply"
                    onClick={() => handleReply(reply.user.username)}
                  >
                    Reply
                  </span>
                )}
              </div>
              {replyUserName === reply.user.username && (
                <ReplyForm
                  handleReplyButton={() => handleReplyButton(reply)}
                  replyText={replyText}
                  handleChange={handleChange}
                />
              )}
            </ReplyStyled>
          </Fragment>
        );
      })}
    </StyledReplies>
  );
};

export default Replies;
