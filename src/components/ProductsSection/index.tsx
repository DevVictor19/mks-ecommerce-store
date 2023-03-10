import { Product, ProductCard } from "../ProductCard";
import { Shimmer } from "../Shimmer";
import { useFetch } from "../../hooks/useFetch";

import { Container } from "./styles";

const url =
  "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC";

const rows = 8;

const shimmers: JSX.Element[] = [];

for (let i = 0; i < rows; i++) {
  shimmers.push(<Shimmer key={`shimmer-${i}`} />);
}

export function ProductsSection() {
  const { data, loading, error } = useFetch<{ products: Product[] }>(url);

  if (error !== null) {
    console.log(error);
    return <h1 data-testid="error-content">Ops... Algo deu errado</h1>;
  }

  if (loading) {
    return <Container data-testid="loading-content">{shimmers}</Container>;
  }

  return (
    <Container data-testid="content-container">
      {data?.products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          brand={product.brand}
          description={product.description}
          photo={product.photo}
          price={product.price}
        />
      ))}
    </Container>
  );
}
