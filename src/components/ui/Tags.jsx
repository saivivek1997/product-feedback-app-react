import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getCategoryFilter } from "../../features/suggestion/SuggestionSlice";

export const Tag = styled.div`
  border-radius: 10px;
  background-color: var(--alice-blue-color);
  font-size: 13px;
  font-weight: 600;
  color: var(--royal-blue-color);
  padding: 8px 16px;
  margin: 8px;
  cursor: pointer;
  &:hover {
    background-color: var(--royal-blue-color);
    color: var(--white-color);
  }
  p {
    text-transform: capitalize;
  }
  &.active-button {
    background-color: var(--royal-blue-color);
    color: var(--white-color);
  }
`;

const Tags = ({
  tag,
  activeClass,
  onHandleTag = () => {},
  noClickFunction = true,
}) => {
  const dispatch = useDispatch();
  const handleTag = () => {
    onHandleTag(tag);
    dispatch(getCategoryFilter({ id: tag.value }));
  };
  return (
    <Tag
      className={`row-center ${activeClass === tag && "active-button"}`}
      onClick={noClickFunction && handleTag}
    >
      <p>{tag?.label}</p>
    </Tag>
  );
};

export default Tags;
