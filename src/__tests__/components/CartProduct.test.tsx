import { render, screen } from "@testing-library/react";

import { CartProduct } from "../../components/CartProduct";

jest.mock("../../hooks/useAppDispatch.ts");

const testProduct = {
  id: 1,
  name: "test name",
  brand: "",
  description: "test description",
  photo: "https://test.jpg/",
  price: "5000.00",
  quantity: 1,
};

beforeEach(() => {
  render(
    <CartProduct
      id={testProduct.id}
      name={testProduct.name}
      brand={testProduct.brand}
      description={testProduct.description}
      photo={testProduct.photo}
      price={testProduct.price}
      quantity={testProduct.quantity}
    />
  );
});

describe("<CartProduct />", () => {
  it("should render an img tag with the provided photo and description props", () => {
    const img = screen.getByTestId("product-img") as HTMLImageElement;

    expect(img.src).toBe(testProduct.photo);
    expect(img.alt).toBe(testProduct.description);
  });

  it("should render the product name with the provided name prop", () => {
    const name = screen.getByTestId("product-name").textContent;

    expect(name).toBe(testProduct.name);
  });

  it("should render the product quantity with the provided quantity props", () => {
    const quantity = screen.getByTestId("product-quantity").textContent;

    expect(quantity).toBe(testProduct.quantity.toString());
  });

  it("should render the product price with the provided price props", () => {
    const price = screen.getByTestId("product-price").textContent;

    expect(price).toBe(`R$${+testProduct.price}`);
  });
});
