import styled from "styled-components";

import { colors } from "../../theme/colors";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 34px;
  background-color: #eeeeee;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0.9375rem;
    color: ${colors.black[900]};
  }
`;
