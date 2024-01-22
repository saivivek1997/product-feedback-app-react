import { Select } from "antd";
import React from "react";
import styled from "styled-components";
import ArrowDownIcon from "../../assets/shared/icon-arrow-down.svg";
import Label from "./Label";

export const InputContainer = styled.div``;

const SelectContainer = styled(Select)`
  margin-bottom: 42px;
  .ant-select-selector {
    display: flex;
    justify-content: space-between;
    height: 50px !important;
    background-color: var(--ghost-white-color) !important;
    border-radius: 5px !important;
    font-size: 15px !important;
    color: #3a4374 !important;
    padding: 16px 16px 20px 32px !important;
    cursor: pointer;
    border: none !important;
  }
`;

const InputSelect = ({
  heading,
  label,
  options,
  handleSelect,
  value,
  sendSelectData,
  name,
  defaultValue,
  ...restProps
}) => {
  return (
    <InputContainer>
      <Label heading={heading} label={label} />
      <SelectContainer
        defaultValue={defaultValue}
        style={{ width: "100%" }}
        suffixIcon={<img src={ArrowDownIcon} />}
        onChange={(value) => {
          handleSelect(value);
          sendSelectData(name, value);
        }}
        options={options}
        value={value}
        {...restProps}
      />
    </InputContainer>
  );
};

export default InputSelect;
