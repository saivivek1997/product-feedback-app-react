import React from "react";
import { Container, MobileContainer, Wrapper } from "./SuggestionCardStyles";
import Tags from "../../components/ui/Tags";
import CommentIcon from "../../assets/shared/icon-comments.svg";
import { useDispatch } from "react-redux";
import { increaseUpvotes } from "./SuggestionSlice";
import { Link } from "react-router-dom";
import MenuIconSvg from "@/components/MenuIconSvg";
import useMobileDeviceDetector from "@/hooks/useMobileDeviceDetector";

const SuggestionCardItem = ({
  id,
  title,
  category,
  comments,
  description,
  upvotes,
}) => {
  const dispatch = useDispatch();
  const { isMobile } = useMobileDeviceDetector();
  return !isMobile ? (
    <Container className="row-between">
      <div className="row-center">
        <div
          className="count column-center"
          onClick={() => dispatch(increaseUpvotes({ id }))}
        >
          <MenuIconSvg />
          <p>{upvotes}</p>
        </div>

        <Link to={`/suggestion/${id}`}>
          <div className="column">
            <p className="title">{title}</p>
            <p className="description">{description}</p>
            <Tags tag={category} />
          </div>
        </Link>
      </div>
      <div className="comments row-center">
        <img src={CommentIcon} alt="commenticon" />
        <p>{comments?.length || 0}</p>
      </div>
    </Container>
  ) : (
    <MobileContainer>
      <Wrapper>
        <Link to={`/suggestion/${id}`}>
          <div className="column">
            <p className="title">{title}</p>
            <p className="description">{description}</p>
            <div className="tag">
              <Tags tag={category} />
            </div>
          </div>
        </Link>
        <div className="details">
          <div
            className="count column-center"
            onClick={() => dispatch(increaseUpvotes({ id }))}
          >
            <MenuIconSvg />
            <p>{upvotes}</p>
          </div>
          <div className="comments row-center">
            <img src={CommentIcon} alt="commenticon" />
            <p>{comments?.length || 0}</p>
          </div>
        </div>
      </Wrapper>
    </MobileContainer>
  );
};

export default SuggestionCardItem;
