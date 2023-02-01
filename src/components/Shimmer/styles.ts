import styled from "styled-components";

export const Container = styled.div`
  max-width: 250px;
  height: 328px;

  @media screen and (min-width: 1200px) {
    max-width: 217px;
    height: 285px;
  }

  .shine {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-repeat: no-repeat;
    background-size: 800px auto;
    display: inline-block;
    position: relative;

    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeholderShimmer;
    animation-timing-function: linear;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 70%;
`;

export const Line = styled.div`
  width: 100%;
  height: 10px;
`;
