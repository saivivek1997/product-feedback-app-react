import Button from "@/components/ui/Button";
import useMobileDeviceDetector from "@/hooks/useMobileDeviceDetector";
import React from "react";
import styled, { css } from "styled-components";

const StyledReplyForm = styled.div`
  .reply-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({ $isMobile }) =>
      $isMobile &&
      css`
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .button {
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }
      `}
  }
  .reply-input {
    flex: 1;
    input {
      all: unset;
      background-color: #f7f8fd;
      padding: 16px;
      height: ${({ $isMobile }) => ($isMobile ? "30px" : "60px")};
      margin-bottom: 16px;
      margin-left: 60px;
      border-radius: 5px;
      width: ${({ $isMobile }) => ($isMobile ? "80%" : "calc(100% - 120px)")};
    }
  }
`;

function ReplyForm({ handleReplyButton, replyText, handleChange }) {
  const { isMobile } = useMobileDeviceDetector();
  return (
    <StyledReplyForm $isMobile={isMobile}>
      <div className="reply-container">
        <div className="reply-input">
          <input
            type="text"
            value={replyText}
            name="reply"
            onChange={handleChange}
          />
        </div>
        <Button
          bgColor="#ad1fea"
          onClick={handleReplyButton}
          className="button"
        >
          Post Reply
        </Button>
      </div>
    </StyledReplyForm>
  );
}

export default ReplyForm;
