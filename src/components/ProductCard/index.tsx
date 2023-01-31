import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addProduct } from "../../store/slices/cartSlice";

import { Container, ImageContainer, InfoContainer } from "./styles";
import shoppingBag from "../../assets/shopping-bag.svg";

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

interface ProductProps extends Product {}

export function ProductCard({
  id,
  name,
  brand,
  description,
  photo,
  price,
}: ProductProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      addProduct({
        id,
        name,
        brand,
        description,
        photo,
        price,
      })
    );
  };

  return (
    <Container>
      <ImageContainer>
        <img src={photo} alt={description} />
      </ImageContainer>
      <InfoContainer>
        <div>
          <h1>{name}</h1>
          <h2 data-testid="product-card-price">R${+price}</h2>
        </div>
        <p>{description}</p>
      </InfoContainer>
      <button onClick={handleClick}>
        <img
          src={shoppingBag}
          alt="Um ícone de sacola de compras minimalista"
        />
        COMPRAR
      </button>
    </Container>
  );
}
