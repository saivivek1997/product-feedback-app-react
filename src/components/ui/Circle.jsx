import React from "react";
import styled from "styled-components";

const CircleStyles = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.$bgcolor};
  border-radius: 50%;
  margin-right: 16px;
`;

const Circle = ({ bgColor }) => {
  return <CircleStyles $bgcolor={bgColor} />;
};

export default Circle;
