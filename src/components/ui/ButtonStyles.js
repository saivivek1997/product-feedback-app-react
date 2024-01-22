import styled from "styled-components";

export const StyledButton = styled.button.attrs((props) => ({
  className: props.className,
}))`
  all: unset;
  background-color: ${(props) => props.$bgColor};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #f2f4fe;
  img {
    margin-right: 6px;
  }
  &:hover {
    opacity: 0.7;
  }
`;
