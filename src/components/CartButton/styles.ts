import styled from "styled-components";

import { colors } from "../../theme/colors";

export const Button = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 52px;
  height: 26px;
  margin-right: 3px;

  background-color: ${colors.white};
  border-radius: 8px;
  cursor: pointer;

  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  color: ${colors.black[900]};

  @media screen and (min-width: 480px) {
    width: 64px;
    height: 32px;
  }

  @media screen and (min-width: 1200px) {
    gap: 15px;

    width: 90px;
    height: 45px;
    margin-right: 23px;

    font-size: 1.125rem;
    line-height: 1.375rem;

    img {
      width: 19px;
      height: 18px;
    }
  }
`;
