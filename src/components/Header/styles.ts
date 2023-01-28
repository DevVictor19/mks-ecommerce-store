import styled from "styled-components";
import { colors } from "../../theme/colors";

export const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;

  width: 100%;
  height: 48px;
  z-index: 10;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors.primary};

  @media screen and (min-width: 480px) {
    height: 64px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1200px) {
    height: 80px;
    padding: 0 65px;
  }

  @media screen and (min-width: 1440px) {
    height: 101px;
  }
`;

export const Logo = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.1875rem;
  text-decoration: none;
  color: ${colors.white};

  span {
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.1875rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 2.5rem;

    span {
      font-size: 1.25rem;
    }
  }
`;
