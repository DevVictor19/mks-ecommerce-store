import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  StateProduct,
  incrementProduct,
  decrementProduct,
  removeProduct,
} from "../../store/slices/cartSlice";

import {
  ActionsContainer,
  Container,
  ImageContainer,
  Switcher,
} from "./styles";

interface CartProductProps extends StateProduct {}

export function CartProduct({
  id,
  name,
  brand,
  description,
  photo,
  price,
  quantity,
}: CartProductProps) {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeProduct({ id }));
  };

  const handleDecrement = () => {
    dispatch(decrementProduct({ id }));
  };

  const handleIncrement = () => {
    dispatch(incrementProduct({ id }));
  };

  return (
    <Container>
      <button type="button" onClick={handleRemove}>
        x
      </button>
      <ImageContainer>
        <img src={photo} alt={description} />
      </ImageContainer>
      <h1>{name}</h1>
      <ActionsContainer>
        <Switcher>
          <button type="button" onClick={handleDecrement}>
            -
          </button>
          <div>{quantity}</div>
          <button type="button" onClick={handleIncrement}>
            +
          </button>
        </Switcher>
        <h2>R${+price}</h2>
      </ActionsContainer>
    </Container>
  );
}
