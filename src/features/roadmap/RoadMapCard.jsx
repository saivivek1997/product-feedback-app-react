import MenuIconSvg from "@/components/MenuIconSvg";
import Tags from "@/components/ui/Tags";
import React from "react";
import styled from "styled-components";
import CommentIcon from "../../assets/shared/icon-comments.svg";

const RoadMapCardContainer = styled.div`
  padding: 24px;
  background-color: var(--white-color);
  border-top: ${({ $bgColor }) => `8px solid ${$bgColor}`};
  margin-top: 20px;
  margin: 20px auto;
  border-radius: 5px;
  .status-container {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 14px;
    .circle {
      width: 8px;
      height: 8px;
      background-color: ${({ $bgCircleColor }) => $bgCircleColor};
      border-radius: 50%;
    }
    .status {
      font-size: 13px;
      color: var(--dark-blue-grey-color);
    }
  }
  .title {
    font-size: 13px;
    font-weight: bold;
    color: #3a4374;
    margin-bottom: 10px;
  }
  .description {
    font-size: 13px;
    color: var(--dark-blue-grey-color);
    margin-bottom: 24px;
  }
  .tag {
    display: flex;
    justify-content: flex-start;
  }
  .info {
    margin-top: 20px;
    .count {
      background-color: #f2f4fe;
      border-radius: 10px;
      padding: 12px 8px;
      gap: 10px;
      cursor: pointer;
      min-width: 60px;
      p {
        font-size: 13px;
        font-weight: bold;
        color: var(--american-blue-color);
      }
    }
    .comments {
      gap: 8px;
      font-size: 16px;
      color: var(--american-blue-color);
    }
  }
`;
function RoadMapCard({
  bgColor,
  bgCircleColor,
  status,
  title,
  description,
  upvotes,
  comments,
  category,
}) {
  return (
    <RoadMapCardContainer $bgColor={bgColor} $bgCircleColor={bgCircleColor}>
      <div className="status-container">
        <div className="circle"></div>
        <div className="status">{status}</div>
      </div>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <div className="tag">
        <Tags tag={category} noClickFunction={false} />
      </div>
      <div className="info row-between">
        <div className="count row-center">
          <MenuIconSvg />
          <p>{upvotes}</p>
        </div>
        <div className="comments row-center">
          <img src={CommentIcon} alt="commenticon" />
          <p>{comments?.length || 0}</p>
        </div>
      </div>
    </RoadMapCardContainer>
  );
}

export default RoadMapCard;
