import userEvent from "@testing-library/user-event";

import { renderWithProviders } from "../../utils/renderWithProviders";
import { CartButton } from "../../components/CartButton";

describe("<CartButton />", () => {
  it("should render the current totalItems of the state as his textContent", () => {
    const { container } = renderWithProviders(<CartButton />, {
      preloadedState: {
        cart: {
          products: [],
          totalAmount: 0,
          totalItems: 20,
        },
      },
    });

    const button = container.querySelector("button") as HTMLButtonElement;

    expect(button.textContent).toBe("20");
  });

  it("should open modal when is clicked", async () => {
    const { container, getByTestId } = renderWithProviders(<CartButton />);
    const button = container.querySelector("button") as HTMLButtonElement;

    await userEvent.click(button);
    const modal = getByTestId("modal");

    expect(modal).toBeInTheDocument();
  });

  it("should close the modal when the close button is clicked", async () => {
    const { getByTestId, queryByTestId, container } = renderWithProviders(
      <CartButton />
    );
    const openButton = container.querySelector("button") as HTMLButtonElement;
    await userEvent.click(openButton);

    const closeButton = getByTestId("close-button") as HTMLButtonElement;
    await userEvent.click(closeButton);

    const modal = queryByTestId("modal");

    expect(modal).not.toBeInTheDocument();
  });
});
