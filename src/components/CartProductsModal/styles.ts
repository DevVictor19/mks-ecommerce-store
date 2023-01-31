import styled from "styled-components";

import { colors } from "../../theme/colors";

export const Container = styled.aside`
  position: fixed;
  top: 0;
  right: 0;

  width: 330px;
  height: 100vh;
  padding-top: 25px;
  padding-left: 32px;

  background-color: ${colors.primary};
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  @media screen and (min-width: 769px) {
    width: 486px;
    padding-top: 36px;
    padding-left: 47px;
  }
`;

export const Menu = styled.section`
  display: flex;
  justify-content: space-between;

  h1 {
    max-width: 178px;
    font-style: normal;
    font-weight: 700;
    font-size: 1.6875rem;
    line-height: 2.0625rem;
    color: ${colors.white};
  }

  button {
    all: unset;

    box-sizing: border-box;

    width: 45px;
    height: 45px;
    border-radius: 50%;

    padding-bottom: 10px;
    margin-right: 15px;

    background-color: ${colors.black[900]};
    cursor: pointer;

    text-align: center;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 2.75rem;
    line-height: 0.9375rem;
    color: ${colors.primary};
  }

  @media screen and (min-width: 769px) {
    button {
      width: 38px;
      height: 38px;
      padding-bottom: 5px;
      margin-right: 22px;

      font-size: 1.75rem;
      color: ${colors.white};
    }
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;

  max-height: 50vh;
  overflow: auto;

  margin-top: 26px;

  @media screen and (min-height: 812px) {
    max-height: 60vh;
  }

  @media screen and (min-width: 769px) {
    margin-top: 60px;
    gap: 28px;
  }
`;

export const Info = styled.section`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${colors.primary};

  h1 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 250px;
    margin-bottom: 44px;
    margin-left: 32px;

    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 0.9375rem;
    color: ${colors.white};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 65.86px;
    background-color: ${colors.black[900]};

    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 0.9375rem;
    color: ${colors.white};
  }

  @media screen and (min-width: 769px) {
    h1 {
      max-width: 379px;
      margin-bottom: 42px;
      margin-left: 47px;
    }
  }
`;
