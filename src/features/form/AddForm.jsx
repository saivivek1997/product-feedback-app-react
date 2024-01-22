import InputSelect from "@/components/ui/InputSelect";
import React from "react";
import InputTextbox from "@/components/ui/InputTextbox";
import FormDetails from "./FormDetails";
import Button from "@/components/ui/Button";
import styled from "styled-components";
import IconArrowLeft from "../../assets/shared/icon-arrow-left.svg";
import { Link } from "react-router-dom";
import { GetCategoryOptions } from "./options";
import useIconCheck from "@/hooks/useIconCheck";
import { convertArrayToObject } from "@/utils/helpers";
import useFormData from "@/hooks/useFormData";
import { addFormData } from "../suggestion/SuggestionSlice";

export const Container = styled.div`
  .back-container {
    margin: 50px auto;
  }
  .back {
    max-width: 600px;
    /* margin: 50px auto; */
    display: flex;
    align-items: center;
    gap: 8px;
  }
  @media screen and (max-width: 600px) {
    max-width: 600px;
    margin: 0 auto;
    padding: 24px;
  }
`;
function AddForm() {
  const { handleSelect, isIconChecked } = useIconCheck(
    ["feature", "UI", "UX", "enhancement", "bug"],
    "add"
  );

  const newIconCheckedObj = convertArrayToObject(isIconChecked);
  const initialData = {
    title: "",
    category: "feature",
    description: "",
  };
  const {
    formData,
    handleChange,
    sendSelectData,
    handleCancelButton,
    handleFormData,
  } = useFormData(initialData, handleSelect);

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
        title="Create New Feedback"
        numberOfButtons={2}
        formType="add"
        handleSubmit={(event) =>
          handleFormData(
            event,
            {
              id: new Date().getMilliseconds(),
              status: "suggestion",
              upvotes: 0,
              ...formData,
            },
            addFormData
          )
        }
      >
        <InputTextbox
          heading="Feedback Title"
          label="Add a short, descriptive headline"
          name="title"
          handleChange={handleChange}
        />
        <InputSelect
          heading="Category"
          label="Choose a category for your feedback"
          options={GetCategoryOptions(newIconCheckedObj)}
          handleSelect={handleSelect}
          name="category"
          sendSelectData={sendSelectData}
          defaultValue={GetCategoryOptions(newIconCheckedObj)[0].value}
        />
        <InputTextbox
          heading="Feedback Detail"
          label="Include any specific comments on what should be improved, added, etc."
          padding="32px 10px 32px 10px"
          name="description"
          handleChange={handleChange}
        />
        <div className="buttons-container">
          <Button
            bgColor="#3a4374"
            className="cancel-button"
            type="button"
            handleButton={handleCancelButton}
          >
            Cancel
          </Button>
          <Button bgColor="#ad1fea" className="add-button" type="submit">
            Add Feedback
          </Button>
        </div>
      </FormDetails>
    </Container>
  );
}

export default AddForm;
