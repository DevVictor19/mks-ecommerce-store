import { render, screen } from "@testing-library/react";

import { ProductCard } from "../../components/ProductCard";

jest.mock("../../hooks/useAppDispatch.ts");

const testProduct = {
  id: 1,
  name: "test name",
  brand: "",
  description: "test description",
  photo: "https://test.jpg/",
  price: "5000.00",
};

beforeEach(() => {
  render(
    <ProductCard
      id={testProduct.id}
      name={testProduct.name}
      brand={testProduct.brand}
      description={testProduct.description}
      photo={testProduct.photo}
      price={testProduct.price}
    />
  );
});

describe("<ProductCard />", () => {
  it("should render the product photo with the provided photo and description prop", () => {
    const img = screen.getByAltText(testProduct.description);

    expect((img as HTMLImageElement).src).toBe(testProduct.photo);
    expect((img as HTMLImageElement).alt).toBe(testProduct.description);
  });

  it("should render the product name with the provided name prop", () => {
    const name = screen.getByText(testProduct.name).textContent;

    expect(name).toBe(testProduct.name);
  });

  it("should render the product price with the provided price prop", () => {
    const price = screen.getByTestId("product-card-price").textContent;

    expect(price).toBe(`R$${+testProduct.price}`);
  });

  it("should render the product description with the provided description prop", () => {
    const description = screen.getByText(testProduct.description).textContent;

    expect(description).toBe(testProduct.description);
  });
});
