import { render } from "@testing-library/react";

import { ProductCard } from "../../components/ProductCard";

jest.mock("../../hooks/useAppDispatch.ts");

describe("<ProductCard />", () => {
  it("should render the product photo with the provided photo url prop", () => {
    const testPhotoUrl = "https://test.jpg/";
    const { container } = render(
      <ProductCard
        id={0}
        name=""
        brand=""
        description=""
        photo={testPhotoUrl}
        price=""
      />
    );
    const img = container.querySelector("img") as HTMLImageElement;

    expect(img.src).toBe(testPhotoUrl);
  });

  it("should render the product name with the provided name prop", () => {
    const testName = "test";
    const { getByText } = render(
      <ProductCard
        id={0}
        name={testName}
        brand=""
        description=""
        photo=""
        price=""
      />
    );
    const h1 = getByText(testName) as HTMLHeadingElement;

    expect(h1.textContent).toBe(testName);
  });

  it("should render the product price with the provided price prop", () => {
    const testPrice = "500.40";
    const { container } = render(
      <ProductCard
        id={0}
        name=""
        brand=""
        description=""
        photo=""
        price={testPrice}
      />
    );
    const h2 = container.querySelector("section div h2") as HTMLHeadingElement;

    expect(h2.textContent).toBe(`R$${+testPrice}`);
  });

  it("should render the product description with the provided description prop", () => {
    const testDescription = "test description";
    const { getByText } = render(
      <ProductCard
        id={0}
        name=""
        brand=""
        description={testDescription}
        photo=""
        price=""
      />
    );
    const p = getByText(testDescription);

    expect(p.textContent).toBe(testDescription);
  });
});
