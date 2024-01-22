import RoadMapCard from "@/features/roadmap/RoadMapCard";
import RoadMapHeader from "@/features/roadmap/RoadMapHeader";
import {
  getRoadMapDetails,
  getRoadMapNumbers,
} from "@/features/roadmap/RoadMapSlice";
import useIconCheck from "@/hooks/useIconCheck";
import useMobileDeviceDetector from "@/hooks/useMobileDeviceDetector";
import { convertArrayToObject } from "@/utils/helpers";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  padding: 10px;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    padding: 0px;
  }
`;

const RoadMapPageContainer = styled.div`
  .mobile-roadmap {
    display: flex;
    padding: 16px;
    justify-content: space-between;
    border-bottom: 1px solid rgb(140, 146, 179, 0.25);
    .planned,
    .in-progress,
    .live {
      font-size: 13px;
      font-weight: bold;
      letter-spacing: -0.18px;
    }
    .planned {
      color: ${({ $roadMapDetails }) =>
        $roadMapDetails.planned ? "#3a4374" : "rgb(58, 67, 116,0.4)"};
      position: relative;
      &::before {
        content: "";
        position: absolute;
        height: 3px;
        width: 100%;
        top: 32px;
        border-bottom: ${({ $roadMapDetails }) =>
          $roadMapDetails.planned ? "3px solid #ad1fea;" : "none"};
      }
    }
    .in-progress {
      color: ${({ $roadMapDetails }) =>
        $roadMapDetails["in-progress"] ? "#3a4374" : "rgb(58, 67, 116,0.4)"};
      position: relative;
      &::before {
        content: "";
        position: absolute;
        height: 3px;
        width: 100%;
        top: 32px;
        border-bottom: ${({ $roadMapDetails }) =>
          $roadMapDetails["in-progress"] ? "3px solid #ad1fea;" : "none"};
      }
    }

    .live {
      color: ${({ $roadMapDetails }) =>
        $roadMapDetails.live ? "#3a4374" : "rgb(58, 67, 116,0.4)"};
      position: relative;
      &::before {
        content: "";
        position: absolute;
        height: 3px;
        width: 100%;
        top: 32px;
        border-bottom: ${({ $roadMapDetails }) =>
          $roadMapDetails.live ? "3px solid #ad1fea;" : "none"};
      }
    }
  }

  .roadmap-layout {
    margin-top: 32px;
    display: grid;
    grid-template-columns: ${({ $isMobile }) =>
      $isMobile ? "repeat(1, 1fr);" : "repeat(3, 1fr)"};
    gap: 16px;
    @media screen and (max-width: 600px) {
      padding: 20px;
    }
  }
  .roadmap-details {
    h2,
    span {
      font-size: 14px;
      font-weight: bold;
      color: #3a4374;
      margin-bottom: 4px;
    }
    .about {
      margin-bottom: 24px;
      color: var(--dark-blue-grey-color);
    }
  }
`;
function RoadMapPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoadMapDetails());
    dispatch(getRoadMapNumbers());
  }, []);
  const {
    roadMapNumbers,
    roadMapDetails: { planned, inProgress, live },
  } = useSelector((state) => state.roadmap);

  const state = useSelector((state) => state.roadmap);

  const { handleSelect, isIconChecked } = useIconCheck(
    ["planned", "in-progress", "live"],
    "add"
  );

  const roadMapDetails = convertArrayToObject(isIconChecked);

  const { isMobile } = useMobileDeviceDetector();
  return (
    <Container>
      <RoadMapPageContainer
        $roadMapDetails={roadMapDetails}
        $isMobile={isMobile}
      >
        <RoadMapHeader />
        <div className="mobile-roadmap">
          <p className="planned" onClick={() => handleSelect("planned")}>
            Planned ({roadMapNumbers.planned})
          </p>
          <p
            className="in-progress"
            onClick={() => handleSelect("in-progress")}
          >
            In-Progress ({roadMapNumbers["in-progress"]})
          </p>
          <p className="live" onClick={() => handleSelect("live")}>
            Live ({roadMapNumbers.live})
          </p>
        </div>
        <div className="roadmap-layout">
          {roadMapDetails.planned && (
            <div className="roadmap-details">
              <h2>
                Planned <span>({roadMapNumbers["planned"]})</span>
              </h2>
              <p className="about">Ideas prioritized for research</p>
              {planned.map((plannedData) => (
                <RoadMapCard
                  {...plannedData}
                  key={plannedData.id}
                  bgColor="#f49f85"
                  bgCircleColor="#f49f85"
                />
              ))}
            </div>
          )}
          {roadMapDetails["in-progress"] && (
            <div className="roadmap-details">
              <h2>
                In-Progress <span>({roadMapNumbers["in-progress"]})</span>
              </h2>
              <p className="about">Currently being developed</p>
              {inProgress.map((inProgressData) => (
                <RoadMapCard
                  {...inProgressData}
                  key={inProgressData.id}
                  bgColor="#ad1fea"
                  bgCircleColor="#ad1fea"
                />
              ))}
            </div>
          )}
          {roadMapDetails.live && (
            <div className="roadmap-details">
              <h2>
                Live
                <span>({roadMapNumbers["live"]})</span>
              </h2>
              <p className="about">Released features</p>
              {live.map((liveData) => (
                <RoadMapCard
                  {...liveData}
                  key={liveData.id}
                  bgColor="#62bcfa"
                  bgCircleColor="#62bcfa"
                />
              ))}
            </div>
          )}
        </div>
      </RoadMapPageContainer>
    </Container>
  );
}

export default RoadMapPage;
