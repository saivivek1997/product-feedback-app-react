import React, { useEffect } from "react";
import SuggestionCardItem from "./SuggestionCardItem";
import { useDispatch, useSelector } from "react-redux";
import { getSuggestionDetails } from "./SuggestionSlice";
import { SuggestionCardContainer } from "./SuggestionCardStyles";
import NoData from "../../components/ui/NoData";
import { getStorage, setStorage } from "../../utils";
import data from "../../data";
import useMobileDeviceDetector from "@/hooks/useMobileDeviceDetector";

const SuggestionCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSuggestionDetails());
  }, []);

  const { suggestionDetails } = useSelector((state) => state.suggestion);
  const { isMobile } = useMobileDeviceDetector();
  return (
    <SuggestionCardContainer $isMobile={isMobile}>
      {suggestionDetails.length > 0 ? (
        suggestionDetails.map((suggestionDetail) => (
          <SuggestionCardItem {...suggestionDetail} key={suggestionDetail.id} />
        ))
      ) : (
        <NoData />
      )}
    </SuggestionCardContainer>
  );
};

export default SuggestionCard;
