import { render } from "@testing-library/react";

import { ProductsSection } from "../../components/ProductsSection";
import { useFetch } from "../../hooks/useFetch";

jest.mock("../../hooks/useFetch");

const useFetchMock = useFetch as jest.MockedFunction<typeof useFetch>;

describe("<ProductsSection />", () => {
  it("should render only the content container when has no errors and its not loading", () => {
    useFetchMock.mockImplementationOnce(() => ({
      data: null,
      error: null,
      loading: false,
    }));

    const { queryByTestId } = render(<ProductsSection />);

    const contentContainer = queryByTestId("content-container");
    const errorContent = queryByTestId("error-content");
    const loadingContent = queryByTestId("loading-content");

    expect(contentContainer).toBeInTheDocument();
    expect(errorContent).not.toBeInTheDocument();
    expect(loadingContent).not.toBeInTheDocument();
  });

  it("should render only the error content when there is an error", () => {
    useFetchMock.mockImplementationOnce(() => ({
      data: null,
      error: "oops... an error occurred",
      loading: false,
    }));

    const { queryByTestId } = render(<ProductsSection />);

    const contentContainer = queryByTestId("content-container");
    const errorContent = queryByTestId("error-content");
    const loadingContent = queryByTestId("loading-content");

    expect(contentContainer).not.toBeInTheDocument();
    expect(errorContent).toBeInTheDocument();
    expect(loadingContent).not.toBeInTheDocument();
  });

  it("should render only the loading content when loading is true", () => {
    useFetchMock.mockImplementationOnce(() => ({
      data: null,
      error: null,
      loading: true,
    }));

    const { queryByTestId } = render(<ProductsSection />);

    const contentContainer = queryByTestId("content-container");
    const errorContent = queryByTestId("error-content");
    const loadingContent = queryByTestId("loading-content");

    expect(contentContainer).not.toBeInTheDocument();
    expect(errorContent).not.toBeInTheDocument();
    expect(loadingContent).toBeInTheDocument();
  });
});
