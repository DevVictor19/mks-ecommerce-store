import { useAppSelector } from "../../hooks/useAppSelector";

import { CartProduct } from "../CartProduct";
import { Container, Content, Info, Menu } from "./styles";

interface CartProductsModalProps {
  onClose: () => void;
}

export function CartProductsModal({ onClose }: CartProductsModalProps) {
  const cart = useAppSelector((state) => state.cart);

  return (
    <Container data-testid="modal">
      <Menu>
        <h1>Carrinho de compras</h1>
        <button type="button" onClick={onClose}>
          x
        </button>
      </Menu>
      <Content>
        {cart.products.map((product) => (
          <CartProduct
            key={product.id}
            id={product.id}
            name={product.name}
            brand={product.brand}
            description={product.description}
            photo={product.photo}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </Content>
      <Info>
        <h1>
          Total: <span>R${cart.totalAmount}</span>
        </h1>
        <div>
          <p>Finalizar Compra</p>
        </div>
      </Info>
    </Container>
  );
}
