import React from "react";
import IconPlus from "../../assets/shared/icon-plus.svg";
import styled from "styled-components";
import IconEditFeedback from "../../assets/shared/icon-edit-feedback.svg";
import IconNewFeedback from "../../assets/shared/icon-new-feedback.svg";

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .container {
    position: relative;
    border-radius: 10px;
    background-color: #fff;
    padding: 42px;
    min-width: 600px;
  }
  .circle-image {
    position: absolute;
    top: -35px;
    left: 30px;
    img {
      height: 50px;
      width: 50px;
    }
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    color: #3a4347;
    margin: 24px 0px 40px 0px;
  }

  .buttons-container {
    display: flex;
    justify-content: ${({ $numberOfButtons }) => {
      return $numberOfButtons === 2 ? "flex-end" : "space-between";
    }};
    .delete-button {
      padding: 16px;
    }
    .buttons-right {
      display: flex;
      justify-content: flex-end;
    }
    .cancel-button {
      padding: 16px;
      margin-right: 20px;
    }
    .add-button {
      padding: 16px;
    }
  }

  @media screen and (max-width: 600px) {
    .container {
      min-width: 0px;
      max-width: 600px;
      padding: 24px;
    }
    .buttons-container {
      flex-direction: column;
      width: 100%;
      gap: 20px;
      text-align: center;
    }
    .buttons-right {
      flex-direction: column;
      justify-content: flex-start;
      gap: 20px;
    }
  }
`;

function FormDetails({
  title,
  children,
  numberOfButtons,
  handleSubmit,
  formType,
}) {
  return (
    <FormContainer $numberOfButtons={numberOfButtons} onSubmit={handleSubmit}>
      <div className="container">
        <div className="circle-image">
          {formType === "add" ? (
            <img src={IconNewFeedback} className="row-center" />
          ) : (
            <img src={IconEditFeedback} className="row-center" />
          )}
        </div>
        <div className="title">{title}</div>
        {children}
      </div>
    </FormContainer>
  );
}

export default FormDetails;
