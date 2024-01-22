import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function useIconCheck(arr, formType) {
  const dispatch = useDispatch();

  const { singleSuggestionDetail } = useSelector((state) => state.suggestion);

  const initialState =
    formType === "add"
      ? arr.map((ar, index) => (index === 0 ? { [ar]: true } : { [ar]: false }))
      : arr.map((ar, index) =>
          ar === singleSuggestionDetail.category ||
          ar === singleSuggestionDetail.status
            ? { [ar]: true }
            : { [ar]: false }
        );

  const [isIconChecked, setIsIconChecked] = useState(initialState);
  const [text, setText] = useState("Most Upvotes");

  const getKey = (name) => Object.keys(name)[0];

  useEffect(() => {
    setIsIconChecked(initialState);
  }, [singleSuggestionDetail.category, singleSuggestionDetail.status]);

  const handleSelect = (value, fn) => {
    const updatedIconChecked = isIconChecked.map((name) => {
      return getKey(name) === value
        ? { [value]: true }
        : { [getKey(name)]: false };
    });
    if (arr.includes(text)) setText(value);
    setIsIconChecked(updatedIconChecked);
    fn && dispatch(fn());
  };

  return { handleSelect, isIconChecked, text };
}

export default useIconCheck;
