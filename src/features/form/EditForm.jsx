import InputSelect from "@/components/ui/InputSelect";
import React, { useEffect } from "react";
import InputTextbox from "@/components/ui/InputTextbox";
import FormDetails from "./FormDetails";
import Button from "@/components/ui/Button";
import styled from "styled-components";
import IconArrowLeft from "../../assets/shared/icon-arrow-left.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GetCategoryOptions, GetStatusOptions } from "./options";
import useIconCheck from "@/hooks/useIconCheck";
import { convertArrayToObject } from "@/utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFormData,
  editFeedback,
  getSuggestionDetailsById,
} from "../suggestion/SuggestionSlice";
import useFormData from "@/hooks/useFormData";
import useToastify from "@/hooks/useToastify";

export const Container = styled.div`
  .back-container {
    margin: 30px 0px;
  }
  .back {
    max-width: 600px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  @media screen and (max-width: 600px) {
    max-width: 600px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .back {
      margin-bottom: 10px;
    }
  }
`;
function EditForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { handleSelect, isIconChecked } = useIconCheck([
    "planned",
    "suggestion",
    "in-progress",
    "live",
  ]);
  const {
    handleSelect: handleCategorySelect,
    isIconChecked: isCategoryIconChecked,
  } = useIconCheck(["feature", "UI", "UX", "enhancement", "bug"]);

  useEffect(() => {
    dispatch(getSuggestionDetailsById({ id }));
  }, []);
  const navigate = useNavigate();
  const newIconCheckedObj = convertArrayToObject(isIconChecked);
  const newCategoryIconCheckedObj = convertArrayToObject(isCategoryIconChecked);
  const { singleSuggestionDetail } = useSelector((state) => state.suggestion);
  const {
    formData,
    handleCancelButton,
    handleFormData,
    handleChange,
    sendSelectData,
  } = useFormData(singleSuggestionDetail);

  const { notify } = useToastify();
  function isFieldsEmpty() {
    for (let key in formData) {
      if (formData[key].length === 0) return true;
    }
    return false;
  }

  return (
    <Container>
      <div className="back-container">
        <Link to="/">
          {" "}
          <div className="back">
            <img src={IconArrowLeft} alt="go-back" />
            <p>Go Back</p>
          </div>
        </Link>
      </div>
      <FormDetails
        title={singleSuggestionDetail.title}
        numberOfButtons={3}
        formType="edit"
        handleSubmit={(e) => {
          handleFormData(e, formData, editFeedback, id, isFieldsEmpty);
          !isFieldsEmpty() && notify("Edited Data Successfully", "success");
        }}
      >
        <InputTextbox
          heading="Feedback Title"
          label="Add a short, descriptive headline"
          value={formData.title}
          handleChange={handleChange}
          name="title"
        />
        <InputSelect
          heading="Category"
          label="Choose a category for your feedback"
          options={GetCategoryOptions(newCategoryIconCheckedObj)}
          handleSelect={handleCategorySelect}
          value={formData.category}
          sendSelectData={sendSelectData}
          name="category"
          defaultValue={
            singleSuggestionDetail.category ||
            GetCategoryOptions(newCategoryIconCheckedObj)[0].value
          }
        />
        <InputSelect
          heading="Update Status"
          label="Change feedback state"
          options={GetStatusOptions(newIconCheckedObj)}
          handleSelect={handleSelect}
          value={formData.status}
          sendSelectData={sendSelectData}
          name="status"
          defaultValue={
            singleSuggestionDetail.status ||
            GetStatusOptions(newIconCheckedObj)[0].value
          }
        />
        <InputTextbox
          heading="Feedback Detail"
          label="Include any specific comments on what should be improved, added, etc."
          padding="32px 10px 32px 10px"
          value={formData.description}
          handleChange={handleChange}
          name="description"
        />
        <div className="buttons-container">
          <Button
            bgColor="#d73737"
            handleButton={() => {
              dispatch(deleteFormData({ id: formData.id }));
              navigate("/");
              notify("Deleted Successfully");
            }}
          >
            Delete
          </Button>
          <div className="buttons-right">
            <Button
              bgColor="#3a4374"
              className="cancel-button"
              handleButton={handleCancelButton}
            >
              Cancel
            </Button>
            <Button
              bgColor="#ad1fea"
              className="add-button"
              disabled={isFieldsEmpty()}
            >
              Add Feedback
            </Button>
          </div>
        </div>
      </FormDetails>
    </Container>
  );
}

export default EditForm;
