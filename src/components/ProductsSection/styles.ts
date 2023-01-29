import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 250px;
  grid-template-rows: auto;
  justify-content: center;
  row-gap: 18px;
  padding-top: 18px;
  padding-bottom: 37px;

  @media screen and (min-width: 769px) {
    grid-template-columns: repeat(2, 250px);
    column-gap: 22px;
    row-gap: 31px;

    padding-top: 54px;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 1025px) {
    grid-template-columns: repeat(3, 250px);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 217px);
  }

  @media screen and (min-width: 1440px) {
    padding-top: 116px;
    padding-bottom: 172px;
  }
`;
