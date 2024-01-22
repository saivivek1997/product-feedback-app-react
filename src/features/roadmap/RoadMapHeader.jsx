import React from "react";
import styled from "styled-components";
import IconLeft from "../../assets/shared/icon-arrow-left.svg";
import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

const RoadMapContainer = styled.div`
  padding: 32px;
  background-color: #373f68;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .roadmap-heading {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 12px;
    .roadmap-heading-wrapper {
      cursor: pointer;
    }
    img {
      margin-right: 12px;
    }
    h3 {
      font-size: 24px;
    }
  }
  .button {
    padding: 12px 20px 12px 20px;
  }
`;

function RoadMapHeader() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <RoadMapContainer>
      <div className="roadmap-heading">
        <div className="roadmap-heading-wrapper">
          <img src={IconLeft} alt="icon-left" />
          <span onClick={goBack}>Go Back</span>
        </div>
        <h3>RoadMap</h3>
      </div>
      <Button
        hasIcon
        bgColor="#ad1fea"
        className="button"
        handleButton={() => navigate("/addform")}
      >
        Add Feedback
      </Button>
    </RoadMapContainer>
  );
}

export default RoadMapHeader;
