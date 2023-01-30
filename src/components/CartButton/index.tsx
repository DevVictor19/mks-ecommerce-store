import { useAppSelector } from "../../hooks/useAppSelector";

import { useState } from "react";

import { Button } from "./styles";
import cart from "../../assets/cart.svg";

export function CartButton() {
  const [open, setOpen] = useState(false);
  const totalItems = useAppSelector((state) => state.cart.totalItems);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <img src={cart} alt="Ícone de carrinho de compras da cor preta" />
        {totalItems}
      </Button>
      {open && <div style={{ position: "absolute" }} data-testid="modal"></div>}
    </>
  );
}
