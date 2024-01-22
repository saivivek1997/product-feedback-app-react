import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import IconSuggestion from "../assets/suggestions/icon-suggestions.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getLeastComments,
  getLeastVotes,
  getMostComments,
  getMostUpvotes,
} from "../features/suggestion/SuggestionSlice";
import Button from "./ui/Button";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import MenuIconSvg from "./MenuIconSvg";
import IconCheck from "../assets/shared/icon-check.svg";
import useIconCheck from "@/hooks/useIconCheck";
import { convertArrayToObject } from "@/utils/helpers";
import { useNavigate } from "react-router-dom";
import useMobileDeviceDetector from "@/hooks/useMobileDeviceDetector";

const Header = styled.header`
  padding: 16px 8px;
  border-radius: ${({ $isMobile }) => ($isMobile ? "none" : "10px")};
  background-color: #373f68;
  .row-flex {
    gap: 16px;
    color: var(--white-color);
    align-items: center;
    span {
      font-size: ${({ $isMobile }) => ($isMobile ? "13px" : "18px")};
      font-weight: bold;
      letter-spacing: -0.25px;
      margin-right: 8px;
    }
    .sortby {
      font-size: 14px;
      font-weight: bold;
      color: #f2f4fe;
      margin-left: 30px;
    }
  }
`;

const DropDownContainer = styled(Dropdown)`
  cursor: pointer;
  .ant-space-item {
    font-size: 14px;
    color: #f2f4fe;
    span {
      margin-left: 8px;
      font-weight: normal;
    }
    font-weight: bold;
  }
  .anticon {
    display: none;
  }
  .sort {
    background-color: red;
    &:hover {
      color: #ad1fea !important;
    }
  }
`;

function SuggestionHeader() {
  const dispatch = useDispatch();
  const { isMobile } = useMobileDeviceDetector();

  const arr = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  const { suggestionDetails } = useSelector((state) => state.suggestion);
  const navigate = useNavigate();
  const {
    handleSelect: handleSort,
    text,
    isIconChecked,
  } = useIconCheck(arr, "add");

  const isIconCheckObject = convertArrayToObject(isIconChecked);
  useEffect(() => {
    dispatch(getMostUpvotes());
  }, []);

  const items = [
    {
      key: "1",
      label: (
        <div
          className="sort"
          onClick={() => handleSort("Most Upvotes", getMostUpvotes)}
        >
          Most Upvotes
          {isIconCheckObject["Most Upvotes"] && (
            <img src={IconCheck} alt="iconcheck" />
          )}
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className="sort"
          onClick={() => handleSort("Least Upvotes", getLeastVotes)}
        >
          Least Upvotes
          {isIconCheckObject["Least Upvotes"] && (
            <img src={IconCheck} alt="iconcheck" />
          )}
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          className="sort"
          onClick={() => handleSort("Most Comments", getMostComments)}
        >
          Most Comments
          {isIconCheckObject["Most Comments"] && (
            <img src={IconCheck} alt="iconcheck" />
          )}
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div
          className="sort"
          onClick={() => handleSort("Least Comments", getLeastComments)}
        >
          Least Comments
          {isIconCheckObject["Least Comments"] && (
            <img src={IconCheck} alt="iconcheck" />
          )}
        </div>
      ),
    },
  ];
  const handleButton = () => {
    navigate("addform");
  };

  return (
    <Header className="row-between" $isMobile={isMobile}>
      <div className="row-flex">
        {!isMobile && (
          <>
            {" "}
            <img src={IconSuggestion} />
            <p>
              <span>{suggestionDetails.length}</span>Suggestions
            </p>
          </>
        )}
        <DropDownContainer
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <Space>
            <span> Sort by : </span> {text}
            <MenuIconSvg stroke={"#ffffff"} />
            <DownOutlined />
          </Space>
        </DropDownContainer>
      </div>

      <Button hasIcon bgColor="#ad1fea" handleButton={handleButton}>
        Add Feedback
      </Button>
    </Header>
  );
}

export default SuggestionHeader;
