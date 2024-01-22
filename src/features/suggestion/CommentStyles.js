import styled from "styled-components";

export const StyledComments = styled.div`
  padding: ${({ $isMobile }) => ($isMobile ? "24px" : "32px")};
  border-radius: 10px;
  background-color: #fff;
  .comment-length {
    font-size: 18px;
    font-weight: bold;
    color: #3a4374;
    margin-bottom: 30px;
  }
`;

export const CommentStyled = styled.div`
  margin-bottom: ${(props) => (props.$hasReply ? "0px" : "32px")};

  border-bottom: ${(props) =>
    props.$hasReply ? "" : "1px solid rgb(140, 146, 179,0.25)"};

  &:last-child {
    border-bottom: 1px solid transparent;
  }
  .comment-details {
    gap: 20px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .comment-user-details {
      padding-bottom: 32px;
      flex: 1;
      .name {
        color: #3a4374;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 1px;
      }
      .username {
        font-size: 14px;
        color: var(--dark-blue-grey-color);
        margin-bottom: 18px;
      }
      .content {
        font-size: 15px;
        color: var(--dark-blue-grey-color);
      }
    }

    .reply {
      font-size: 13px;
      font-weight: 600;
      color: var(--royal-blue-color);
      margin-top: 30px;
      cursor: pointer;
    }
  }
`;

//replies
export const StyledReplies = styled.div`
  border-radius: 10px;
  margin-left: 30px;
  background-color: #fff;
`;

export const ReplyStyled = styled.div`
  .reply-details {
    gap: 20px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .reply-user-details {
      padding-bottom: 16px;
      margin-bottom: 16px;
      .name {
        color: #3a4374;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 1px;
      }
      .username {
        font-size: 14px;
        color: var(--dark-blue-grey-color);
        margin-bottom: 18px;
      }
      .content {
        font-size: 15px;
        color: var(--dark-blue-grey-color);
        .reply-username {
          font-size: 15px;
          color: var(--purple-color);
          font-weight: bold;
          margin-right: 10px;
        }
      }
    }

    .reply {
      font-size: 13px;
      font-weight: 600;
      color: var(--royal-blue-color);
      margin-top: 30px;
      cursor: pointer;
    }
  }
`;
