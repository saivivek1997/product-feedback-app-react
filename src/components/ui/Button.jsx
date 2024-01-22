import React from "react";
import IconPlus from "../../assets/shared/icon-plus.svg";
import { StyledButton } from "./ButtonStyles";

function Button({ hasIcon, bgColor, children, handleButton, ...restProps }) {
  return (
    <StyledButton $bgColor={bgColor} onClick={handleButton} {...restProps}>
      {hasIcon && <img src={IconPlus} />}
      {children}
    </StyledButton>
  );
}

export default Button;
