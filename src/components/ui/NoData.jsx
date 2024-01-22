import React from "react";
import EmptyIcon from "../../assets/suggestions/illustration-empty.svg";
import Button from "./Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledNoData = styled.div`
  height: calc(100vh - 300px);
  gap: 30px;
  max-width: 420px;
  margin: auto;
  .text {
    font-size: 24px;
    font-weight: bold;
    color: #3a4374;
  }
  .description {
    font-size: 16px;
    color: var(--dark-blue-grey-color);
  }
`;

function NoData() {
  const navigate = useNavigate();
  return (
    <StyledNoData className="column-center">
      <img src={EmptyIcon} alt="emptyicon" />
      <p className="text"> There is no feedback yet.</p>
      <p className="description">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Button
        hasIcon
        bgColor="#ad1fea"
        handleButton={() => navigate("addform")}
      >
        Add Feedback
      </Button>
    </StyledNoData>
  );
}

export default NoData;
