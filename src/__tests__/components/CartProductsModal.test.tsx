import { renderWithProviders } from "../../utils/renderWithProviders";

import { CartProductsModal } from "../../components/CartProductsModal";

describe("<CartProductsModal />", () => {
  it("should render the current totalAmount of the state", () => {
    const testTotalAmount = 1000;
    const { getByTestId } = renderWithProviders(
      <CartProductsModal onClose={() => {}} />,
      {
        preloadedState: {
          cart: {
            products: [],
            totalAmount: testTotalAmount,
            totalItems: 0,
          },
        },
      }
    );
    const totalAmount = getByTestId("total-amount").textContent;

    expect(totalAmount).toBe(`Total: R$${testTotalAmount}`);
  });
});
