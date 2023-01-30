import { CartButton } from "../CartButton";

import { Container, Logo } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo href="/">
        MKS <span>Sistemas</span>
      </Logo>
      <CartButton />
    </Container>
  );
}
