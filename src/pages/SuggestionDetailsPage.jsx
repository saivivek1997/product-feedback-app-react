import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSuggestionDetailsById } from "../features/suggestion/SuggestionSlice";
import { Container } from "./SuggestionDetailsPageStyles";
import IconArrowLeft from "../assets/shared/icon-arrow-left.svg";
import Button from "../components/ui/Button";
import SuggestionCardItem from "../features/suggestion/SuggestionCardItem";
import Comments from "../features/suggestion/Comments";
import CommentForm from "@/features/suggestion/CommentForm";
import { getStorage, setStorage } from "@/utils";
import data from "@/data";

function SuggestionDetailsPage() {
  const [name, setName] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { singleSuggestionDetail, productRequests } = useSelector(
    (state) => state.suggestion
  );

  useEffect(() => {
    const productDetails = getStorage("product-details")
      ? getStorage("product-details")
      : data.productRequests;
    setStorage("product-details", productDetails);
  }, []);

  useEffect(() => {
    dispatch(getSuggestionDetailsById({ id }));
  }, [productRequests]);

  const handleButton = () => {
    navigate(`/editform/${id}`);
  };
  return (
    <Container>
      <div className="back-edit row-between">
        <Link to="/">
          <img src={IconArrowLeft} alt="icon-arrow-left" />
          <span> Go Back </span>
        </Link>

        <Button bgColor="#4661e6" handleButton={handleButton}>
          Edit Feedback
        </Button>
      </div>
      <SuggestionCardItem
        {...singleSuggestionDetail}
        key={singleSuggestionDetail}
      />
      <Comments comments={singleSuggestionDetail?.comments} hasHeadingComment />
      <CommentForm />
      {name}
    </Container>
  );
}

export default SuggestionDetailsPage;
