import { Product } from "../../components/ProductCard";
import {
  cartSliceReducer,
  addProduct,
  incrementProduct,
  decrementProduct,
  removeProduct,
  CartState,
} from "../../store/slices/cartSlice";

describe("addProduct()", () => {
  it("should update the state with the provided product payload", () => {
    const previousState: CartState = {
      products: [],
      totalAmount: 0,
      totalItems: 0,
    };

    const newProduct: Product = {
      id: 1,
      name: "test name",
      brand: "test brand",
      description: "test description",
      photo: "test photo",
      price: "500",
    };

    const updatedState = cartSliceReducer(
      previousState,
      addProduct(newProduct)
    );

    expect(updatedState.products[0]).toEqual({ ...newProduct, quantity: 1 });
  });

  it("should increment the amount of a repeated item in the state", () => {
    const previousState: CartState = {
      products: [
        {
          id: 1,
          name: "test name",
          brand: "test brand",
          description: "test description",
          photo: "test photo",
          price: "500",
          quantity: 1,
        },
      ],
      totalAmount: 500,
      totalItems: 1,
    };

    const newProduct: Product = {
      id: 1,
      name: "test name",
      brand: "test brand",
      description: "test description",
      photo: "test photo",
      price: "500",
    };

    const updatedState = cartSliceReducer(
      previousState,
      addProduct(newProduct)
    );

    expect(updatedState.products[0].quantity).toBe(2);
  });

  it("should update the totalAmount of the state", () => {
    const previousState: CartState = {
      products: [],
      totalAmount: 0,
      totalItems: 0,
    };

    const newProduct: Product = {
      id: 1,
      name: "test name",
      brand: "test brand",
      description: "test description",
      photo: "test photo",
      price: "500",
    };

    const updatedState = cartSliceReducer(
      previousState,
      addProduct(newProduct)
    );

    expect(updatedState.totalAmount).toBe(500);
  });

  it("should update the totalItems of the state", () => {
    const previousState: CartState = {
      products: [],
      totalAmount: 0,
      totalItems: 0,
    };

    const newProduct: Product = {
      id: 1,
      name: "test name",
      brand: "test brand",
      description: "test description",
      photo: "test photo",
      price: "500",
    };

    const updatedState = cartSliceReducer(
      previousState,
      addProduct(newProduct)
    );

    expect(updatedState.totalItems).toBe(1);
  });
});

describe("incrementProduct()", () => {
  it("should increment the quantity of an existent product in the state", () => {
    const previousState: CartState = {
      products: [
        {
          id: 1,
          name: "test name",
          brand: "test brand",
          description: "test description",
          photo: "test photo",
          price: "500",
          quantity: 1,
        },
      ],
      totalAmount: 500,
      totalItems: 1,
    };

    const updatedState = cartSliceReducer(
      previousState,
      incrementProduct({ id: 1 })
    );

    expect(updatedState.products[0].quantity).toBe(2);
  });

  it("should throw if try increment a product that does not exists in the state", () => {
    const previousState: CartState = {
      products: [
        {
          id: 1,
          name: "test name",
          brand: "test brand",
          description: "test description",
          photo: "test photo",
          price: "500",
          quantity: 1,
        },
      ],
      totalAmount: 500,
      totalItems: 1,
    };

    expect(() => {
      cartSliceReducer(previousState, incrementProduct({ id: 2 }));
    }).toThrow();
  });

  it("should update the totalAmount of the state", () => {
    const previousState: CartState = {
      products: [
        {
          id: 1,
          name: "test name",
          brand: "test brand",
          description: "test description",
          photo: "test photo",
          price: "500",
          quantity: 1,
        },
      ],
      totalAmount: 500,
      totalItems: 1,
    };

    const updatedState = cartSliceReducer(
      previousState,
      incrementProduct({ id: 1 })
    );

    expect(updatedState.totalAmount).toBe(1000);
  });

  it("should update the totalItems of the state", () => {
    const previousState: CartState = {
      products: [
        {
          id: 1,
          name: "test name",
          brand: "test brand",
          description: "test description",
          photo: "test photo",
          price: "500",
          quantity: 1,
        },
      ],
      totalAmount: 500,
      totalItems: 1,
    };

    const updatedState = cartSliceReducer(
      previousState,
      incrementProduct({ id: 1 })
    );

    expect(updatedState.totalItems).toBe(2);
  });
});

describe("decrementProduct()", () => {
  it("should decrement the quantity of an existent product in the state", () => {
    const previousState: CartState = {
      products: [
        {
          id: 1,
          name: "test name",
          brand: "test brand",
          description: "test description",
          photo: "test photo",
          price: "500",
          quantity: 2,
        },
      ],
      totalAmount: 500,
      totalItems: 1,
    };

    const updatedState = cartSliceReducer(
      previousState,
      decrementProduct({ id: 1 })
    );

    expect(updatedState.products[0].quantity).toBe(1);
  });

  it("should remove product from the state when the quantity is equal to 1", () => {
    const previousState: CartState = {
      products: [
        {
          id: 1,
          name: "test name",
          brand: "test brand",
          description: "test description",
          photo: "test photo",
          price: "500",
          quantity: 1,
        },
      ],
      totalAmount: 500,
      totalItems: 1,
    };

    const updatedState = cartSliceReducer(
      previousState,
      decrementProduct({ id: 1 })
    );

    expect(updatedState.products.length).toBe(0);
  });

  it("should throw if try decrement a product that does not exists in the state", () => {
    const previousState: CartState = {
      products: [
        {
          id: 1,
          name: "test name",
          brand: "test brand",
          description: "test description",
          photo: "test photo",
          price: "500",
          quantity: 1,
        },
      ],
      totalAmount: 500,
      totalItems: 1,
    };

    expect(() => {
      cartSliceReducer(previousState, decrementProduct({ id: 2 }));
    }).toThrow();
  });

  it("should update the totalAmount of the state", () => {
    const previousState: CartState = {
      products: [
        {
          id: 1,
          name: "test name",
          brand: "test brand",
          description: "test description",
          photo: "test photo",
          price: "500",
          quantity: 1,
        },
      ],
      totalAmount: 500,
      totalItems: 1,
    };

    const updatedState = cartSliceReducer(
      previousState,
      decrementProduct({ id: 1 })
    );

    expect(updatedState.totalAmount).toBe(0);
  });

  it("should uptade the totalItems of the state", () => {
    const previousState: CartState = {
      products: [
        {
          id: 1,
          name: "test name",
          brand: "test brand",
          description: "test description",
          photo: "test photo",
          price: "500",
          quantity: 1,
        },
      ],
      totalAmount: 500,
      totalItems: 1,
    };

    const updatedState = cartSliceReducer(
      previousState,
      decrementProduct({ id: 1 })
    );

    expect(updatedState.totalItems).toBe(0);
  });
});

describe("removeProduct()", () => {
  it("should remove an existent product of the state", () => {
    const previousState: CartState = {
      products: [
        {
          id: 1,
          name: "test name",
          brand: "test brand",
          description: "test description",
          photo: "test photo",
          price: "500",
          quantity: 10,
        },
      ],
      totalAmount: 500,
      totalItems: 1,
    };

    const updatedState = cartSliceReducer(
      previousState,
      removeProduct({ id: 1 })
    );

    expect(updatedState.products.length).toBe(0);
  });

  it("should throw if try to remove a product that does not exists in the state", () => {
    const previousState: CartState = {
      products: [
        {
          id: 1,
          name: "test name",
          brand: "test brand",
          description: "test description",
          photo: "test photo",
          price: "500",
          quantity: 10,
        },
      ],
      totalAmount: 500,
      totalItems: 1,
    };

    expect(() => {
      cartSliceReducer(previousState, removeProduct({ id: 2 }));
    }).toThrow();
  });

  it("should update the totalAmount of the state", () => {
    const previousState: CartState = {
      products: [
        {
          id: 1,
          name: "test name",
          brand: "test brand",
          description: "test description",
          photo: "test photo",
          price: "500",
          quantity: 1,
        },
      ],
      totalAmount: 500,
      totalItems: 1,
    };

    const updatedState = cartSliceReducer(
      previousState,
      removeProduct({ id: 1 })
    );

    expect(updatedState.totalAmount).toBe(0);
  });

  it("should update the totalItems of the state", () => {
    const previousState: CartState = {
      products: [
        {
          id: 1,
          name: "test name",
          brand: "test brand",
          description: "test description",
          photo: "test photo",
          price: "500",
          quantity: 1,
        },
      ],
      totalAmount: 500,
      totalItems: 1,
    };

    const updatedState = cartSliceReducer(
      previousState,
      removeProduct({ id: 1 })
    );

    expect(updatedState.totalItems).toBe(0);
  });
});
