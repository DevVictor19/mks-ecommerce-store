import styled from "styled-components";
import { colors } from "../../theme/colors";

export const Container = styled.article`
  position: relative;

  width: 250px;
  height: 220px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  flex-shrink: 0;
  margin-top: 10px;

  h1 {
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${colors.black[400]};
  }

  button {
    all: unset;

    position: absolute;
    right: 14px;
    top: 9px;

    box-sizing: border-box;
    cursor: pointer;

    font-style: normal;
    font-weight: 400;
    font-size: 2.625rem;
    line-height: 1.0625rem;
  }

  @media screen and (min-width: 769px) {
    display: flex;
    align-items: center;

    width: 379px;
    height: 95px;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);

    h1 {
      min-width: 113px;
      max-width: 113px;
      font-size: 0.8125rem;
      line-height: 1.0625rem;
    }

    button {
      top: -6px;
      right: -6px;

      text-align: center;
      padding-bottom: 4px;

      width: 18px;
      height: 18px;
      border-radius: 50%;

      font-size: 0.875rem;
      line-height: 1.0625rem;

      color: ${colors.white};
      background-color: ${colors.black[900]};
    }
  }
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  text-align: center;

  padding-top: 8px;
  margin-bottom: 6px;

  img {
    width: 45%;
    object-fit: contain;
  }

  @media screen and (min-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30%;
    max-width: 80px;
    padding-top: 0;
    margin: 0;
    overflow: hidden;

    img {
      width: 90%;
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 29px;

  margin-top: 11px;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 84px;
    height: 34.81px;
    border-radius: 5px;
    background-color: ${colors.black[500]};

    font-style: normal;
    font-weight: 700;
    font-size: 0.9375rem;
    line-height: 0.9375rem;
    color: ${colors.white};
  }

  @media screen and (min-width: 769px) {
    gap: 40px;
    margin-left: 9px;

    h2 {
      font-size: 0.875rem;
      line-height: 1.0625rem;

      width: 62px;
      height: 17px;
      background-color: transparent;
      color: ${colors.black[900]};
    }
  }
`;

export const Switcher = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 97px;
  height: 34px;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;

  div {
    flex: 1;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: ${colors.black[900]};
  }

  button {
    all: unset;

    flex: 1;
    box-sizing: border-box;
    height: 90%;

    text-align: center;
    font-style: normal;
    font-weight: 400;
    color: ${colors.black[900]};

    cursor: pointer;

    &:nth-child(1) {
      border-right: 0.3px solid #bfbfbf;
      font-size: 1.5rem;
      line-height: 1.8125rem;
    }

    &:nth-child(3) {
      border-left: 0.3px solid #bfbfbf;
      font-size: 1.375rem;
      line-height: 1.6875rem;
    }
  }

  @media screen and (min-width: 769px) {
    width: 50px;
    height: 19px;

    &::after {
      content: "Qtd:";

      position: absolute;
      top: -10px;

      font-style: normal;
      font-weight: 400;
      font-size: 5px;
      line-height: 6px;
      color: ${colors.black[900]};
    }

    div {
      font-size: 0.5rem;
      line-height: 0.625rem;
    }

    button {
      &:nth-child(1) {
        font-size: 0.75rem;
        line-height: 0.9375rem;
      }

      &:nth-child(3) {
        font-size: 0.5rem;
        line-height: 0.625rem;
      }
    }
  }
`;
