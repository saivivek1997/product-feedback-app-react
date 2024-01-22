import React from "react";
import styled from "styled-components";

const LabelContainer = styled.div`
  font-size: 14px;
  h3 {
    font-weight: bold;
    color: #3a4374;
    margin-bottom: 2px;
  }
  p {
    color: var(--dark-blue-grey-color);
    margin-bottom: 16px;
  }
`;

function Label({ heading, label }) {
  return (
    <LabelContainer>
      <h3>{heading}</h3>
      <p>{label}</p>
    </LabelContainer>
  );
}

export default Label;
