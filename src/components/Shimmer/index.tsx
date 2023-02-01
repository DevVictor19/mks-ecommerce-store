import { Attributes } from "react";

import { Container, Box, Line } from "./styles";

interface ShimmerProps extends Attributes {}

export function Shimmer({ ...rest }: ShimmerProps) {
  return (
    <Container {...rest}>
      <Box className="shine" />
      <Line style={{ width: "70%" }} className="shine" />
      <Line style={{ width: "70%" }} className="shine" />
      <Line style={{ width: "70%" }} className="shine" />
      <Line style={{ width: "50%" }} className="shine" />
    </Container>
  );
}
