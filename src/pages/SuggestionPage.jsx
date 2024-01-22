import React, { useEffect, useState } from "react";
import { Container, MobileContainer } from "./SuggestionPageStyles";
import { useDispatch, useSelector } from "react-redux";
import Tags from "../components/ui/Tags";
import { getRoadMapNumbers } from "../features/suggestion/SuggestionSlice";
import Circle from "../components/ui/Circle";
import { Link } from "react-router-dom";
import SuggestionHeader from "../components/SuggestionHeader";
import SuggestionCard from "../features/suggestion/SuggestionCard";
import { getStorage, setStorage } from "../utils";
import data from "../data";
import useMobileDeviceDetector from "@/hooks/useMobileDeviceDetector";
import IconHamBurger from "../assets/shared/mobile/icon-hamburger.svg";
import IconClose from "../assets/shared/mobile/icon-close.svg";
import Sidebar from "@/components/ui/Sidebar";

export const tags = [
  { label: "All", value: "all" },
  { label: "UI", value: "UI" },
  { label: "UX", value: "UX" },
  { label: "Enhancement", value: "enhancement" },
  { label: "Bug", value: "bug" },
  { label: "Feature", value: "feature" },
];

function SuggestionPage() {
  const dispatch = useDispatch();
  const { isMobile } = useMobileDeviceDetector();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeClass, setActiveClass] = useState("All");
  const handleTag = (tag) => setActiveClass(tag);

  useEffect(() => {
    const productDetails = getStorage("product-details")
      ? getStorage("product-details")
      : data.productRequests;

    setStorage("product-details", productDetails);
  }, []);

  useEffect(() => {
    dispatch(getRoadMapNumbers());
  }, []);

  const { roadMapNumbers } = useSelector((state) => state.suggestion);

  const handleSidebar = () => setIsSidebarOpen((prevOpen) => !prevOpen);

  return !isMobile ? (
    <Container>
      <div className="left">
        <div className="image-container">
          <h3>Frontend Mentor</h3>
          <h4>Feedback Board</h4>
        </div>
        <div
          className="tags-container"
          onClick={() => dispatch(getRoadMapNumbers())}
        >
          {tags.map((tag) => (
            <Tags
              tag={tag}
              key={tag.label}
              activeClass={activeClass}
              onHandleTag={handleTag}
            />
          ))}
        </div>

        <div className="roadmap-container">
          <div className="row-between">
            <h1>Roadmap</h1>
            <Link to="/roadmap">view</Link>
          </div>
          <div className="row-between">
            <div className="row-center">
              <Circle bgColor="#f49f85" />
              <p>planned</p>
            </div>
            <span>{roadMapNumbers["planned"]}</span>
          </div>
          <div className="row-between">
            <div className="row-center">
              <Circle bgColor="#ad1fea" />
              <p>in-Progress</p>
            </div>

            <span> {roadMapNumbers["in-progress"]}</span>
          </div>
          <div className="row-between">
            <div className="row-center">
              <Circle bgColor="#62bcfa" />
              <p>live</p>
            </div>
            <span>{roadMapNumbers["live"]}</span>
          </div>
        </div>
      </div>
      <div className="right">
        <SuggestionHeader />
        <SuggestionCard />
      </div>
    </Container>
  ) : (
    <MobileContainer>
      <div className="image-container">
        <div>
          <h3>Frontend Mentor</h3>
          <h4>Feedback Board</h4>
        </div>
        {isSidebarOpen ? (
          <img
            src={IconClose}
            alt="hamburger"
            className="icon"
            onClick={handleSidebar}
          />
        ) : (
          <img
            src={IconHamBurger}
            alt="hamburger"
            className="icon"
            onClick={handleSidebar}
          />
        )}
      </div>

      {isSidebarOpen ? (
        <Sidebar>
          <div
            className="tags-container"
            onClick={() => dispatch(getRoadMapNumbers())}
          >
            {tags.map((tag) => (
              <Tags
                tag={tag}
                key={tag}
                activeClass={activeClass}
                onHandleTag={handleTag}
              />
            ))}
          </div>
          <div className="roadmap-container">
            <div className="row-between">
              <h1>Roadmap</h1>
              <Link to="/roadmap">view</Link>
            </div>
            <div className="row-between">
              <div className="row-center">
                <Circle bgColor="#f49f85" />
                <p>planned</p>
              </div>
              <span>{roadMapNumbers["planned"]}</span>
            </div>
            <div className="row-between">
              <div className="row-center">
                <Circle bgColor="#ad1fea" />
                <p>in-Progress</p>
              </div>

              <span> {roadMapNumbers["in-progress"]}</span>
            </div>
            <div className="row-between">
              <div className="row-center">
                <Circle bgColor="#62bcfa" />
                <p>live</p>
              </div>
              <span>{roadMapNumbers["live"]}</span>
            </div>
          </div>
        </Sidebar>
      ) : null}

      <SuggestionHeader />
      <SuggestionCard />
    </MobileContainer>
  );
}

export default SuggestionPage;
