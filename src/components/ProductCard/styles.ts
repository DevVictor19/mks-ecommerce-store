import styled from "styled-components";
import { colors } from "../../theme/colors";

export const Container = styled.article`
  position: relative;
  max-width: 250px;
  height: 328px;

  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px #00000022;
  overflow: hidden;

  button {
    display: flex;
    align-items: center;
    gap: 16px;

    position: absolute;
    bottom: 0;

    width: 100%;
    height: 36px;
    padding-left: 65px;

    font-style: normal;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.125rem;

    border: none;
    background-color: ${colors.primary};
    color: ${colors.white};

    cursor: pointer;
  }

  @media screen and (min-width: 1200px) {
    max-width: 217px;
    height: 285px;

    button {
      padding-left: 57px;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: contain;
    width: 70%;
  }

  @media screen and (min-width: 1200px) {
    img {
      width: 60%;
    }
  }
`;

export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;

  margin-top: 14px;

  div {
    display: flex;
    justify-content: center;
    gap: 4px;

    h1 {
      width: 142px;

      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.1875rem;
      color: ${colors.black[400]};
    }

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 30px;
      min-width: 73px;
      border-radius: 5px;

      font-style: normal;
      font-weight: 700;
      font-size: 0.9375rem;
      line-height: 0.9375rem;

      background-color: ${colors.black[500]};
      color: ${colors.white};
    }
  }

  p {
    max-width: 221px;

    font-style: normal;
    font-weight: 300;
    font-size: 0.625rem;
    color: ${colors.black[400]};
  }

  @media screen and (min-width: 1200px) {
    div {
      h1 {
        width: 124px;
      }

      h2 {
        height: 26px;
        min-width: 64px;
      }
    }

    p {
      max-width: 192px;
    }
  }
`;
