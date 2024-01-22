import React from "react";
import styled from "styled-components";
import Label from "./Label";

export const InputContainer = styled.div`
  font-size: 14px;
  textarea {
    all: unset;
    border-radius: 5px;
    background-color: var(--ghost-white-color);
    margin-bottom: 32px;
    width: 100%;
    padding: ${({ $padding }) => ($padding ? $padding : "16px")};
  }
  @media screen and (max-width: 600px) {
    textarea {
      width: 90%;
    }
  }
`;

function InputTextbox({
  heading,
  label,
  padding,
  value,
  handleChange,
  ...restProps
}) {
  return (
    <InputContainer $padding={padding}>
      <Label heading={heading} label={label} />
      <textarea
        type="text"
        value={value}
        {...restProps}
        onChange={handleChange}
      />
    </InputContainer>
  );
}

export default InputTextbox;
