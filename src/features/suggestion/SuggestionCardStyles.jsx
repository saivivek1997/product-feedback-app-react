import styled, { css } from "styled-components";

export const SuggestionCardContainer = styled.div``;

export const Container = styled.div`
  background-color: var(--white-color);
  padding: 32px;
  margin-bottom: 20px;
  margin-top: 24px;
  .row-center {
    justify-content: flex-start;
  }

  .count {
    background-color: #f2f4fe;
    border-radius: 10px;
    padding: 12px 8px;
    gap: 4px;
    cursor: pointer;
    min-width: 60px;
    p {
      font-size: 13px;
      font-weight: bold;
      color: var(--american-blue-color);
    }
  }

  .column {
    margin-left: 30px;
    align-items: flex-start;
    gap: 4px;
    .title {
      font-size: 18px;
      font-weight: bold;
      letter-spacing: -0.25px;
      color: #3a4374;
    }
    .description {
      font-size: 16px;
      color: var(--dark-blue-grey-color);
    }
  }
  .comments {
    gap: 8px;
    font-size: 16px;
    color: var(--american-blue-color);
  }
`;

// mobile styles

export const MobileContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
`;

export const Wrapper = styled.div`
  background-color: var(--white-color);
  padding: 24px;
  margin-bottom: 16px;
  border-radius: 10px;
  .column {
    align-items: flex-start;
    gap: 4px;
    .title {
      font-size: 13px;
      font-weight: bold;
      letter-spacing: -0.25px;
      color: #3a4374;
    }
    .description {
      font-size: 13px;
      color: var(--dark-blue-grey-color);
    }
  }

  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    .count {
      background-color: #f2f4fe;
      border-radius: 10px;
      padding: 12px 8px;
      gap: 4px;
      cursor: pointer;
      min-width: 60px;
      p {
        font-size: 13px;
        font-weight: bold;
        color: var(--american-blue-color);
      }
    }

    .comments {
      gap: 8px;
      font-size: 13px;
      color: var(--american-blue-color);
    }
  }
`;
