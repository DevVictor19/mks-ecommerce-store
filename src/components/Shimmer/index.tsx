import { Container, Box, Line } from "./styles";

export function Shimmer() {
  return (
    <Container>
      <Box className="shine" />
      <Line style={{ width: "70%" }} className="shine" />
      <Line style={{ width: "70%" }} className="shine" />
      <Line style={{ width: "70%" }} className="shine" />
      <Line style={{ width: "50%" }} className="shine" />
    </Container>
  );
}
