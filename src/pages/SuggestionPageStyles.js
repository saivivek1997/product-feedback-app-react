import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
  .left {
    width: 255px;
    .image-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      border-radius: 10px;
      padding: 24px;
      background-image: radial-gradient(
        circle at 104% -10%,
        #e84d70,
        #a337f6 56%,
        #28a7ed 106%
      );
      height: 137px;
      color: #fff;
      margin-bottom: 24px;

      h3 {
        font-size: 20px;
        font-weight: bold;
      }
      h4 {
        font-size: 15px;
        font-weight: 500;
        opacity: 0.75;
      }
    }

    .tags-container {
      border-radius: 10px;
      background-color: var(--white-color);
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 24px;
      padding: 16px 0px 16px 16px;
    }

    .roadmap-container {
      background-color: var(--white-color);
      padding: 24px;
      border-radius: 10px;
      .row-between {
        margin-bottom: 8px;
        font-size: 16px;
        color: var(--dark-blue-grey-color);
      }
      .row-between:first-child {
        margin-bottom: 16px;
      }
      span {
        font-weight: bold;
      }

      h1 {
        font-size: 18px;
        font-weight: bold;
        color: var(--american-blue-color);
        letter-spacing: -0.25px;
      }

      a {
        color: var(--royal-blue-color);
        text-decoration: underline;
        font-size: 13px;
        font-weight: 600;
      }
    }
  }

  .right {
    margin-left: 30px;
    flex: 1;
  }
  //tabs
  @media only screen and (max-width: 1000px) and (min-width: 600px) {
    flex-direction: column;
    gap: 40px;
    padding: 20px;
    .left {
      display: flex;
      gap: 20px;
      width: 100%;
      .image-container {
        margin: 0;
        flex-basis: 250px;
        height: auto;
      }
      .tags-container {
        margin: 0;
        align-items: flex-start;
        flex-basis: 300px;
      }
      .roadmap-container {
        margin: 0;
        flex-basis: 300px;
      }
    }
    .right {
      margin: 0;
    }
  }
`;

//mobile

export const MobileContainer = styled.div`
  .mobile-header {
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .image-container {
    position: sticky;
    top: 0%;
    display: flex;
    justify-content: space-between;
    padding: 16px 24px;
    background-image: radial-gradient(
      circle at 104% -10%,
      #e84d70,
      #a337f6 56%,
      #28a7ed 106%
    );
    color: #fff;

    h3 {
      font-size: 15px;
      font-weight: bold;
      letter-spacing: -0.19px;
    }
    h4 {
      font-size: 13px;
      font-weight: 500;
      opacity: 0.75;
    }
  }
  .icon {
    height: 15px;
    width: 15px;
    align-self: center;
    cursor: pointer;
  }
  .tags-container {
    border-radius: 10px;
    background-color: var(--white-color);
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
    padding: 16px 0px 16px 16px;
  }
  .roadmap-container {
    background-color: var(--white-color);
    padding: 24px;
    border-radius: 10px;
    .row-between {
      margin-bottom: 8px;
      font-size: 16px;
      color: var(--dark-blue-grey-color);
    }
    .row-between:first-child {
      margin-bottom: 16px;
    }
    span {
      font-weight: bold;
    }

    h1 {
      font-size: 18px;
      font-weight: bold;
      color: var(--american-blue-color);
      letter-spacing: -0.25px;
    }

    a {
      color: var(--royal-blue-color);
      text-decoration: underline;
      font-size: 13px;
      font-weight: 600;
    }
  }
`;
