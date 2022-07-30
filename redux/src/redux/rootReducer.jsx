const initialState = {
    products: [],
    cart: [],
    total: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "cart/add":
            return { ...state, cart: [...state.cart, ...payload] };
        case "cart/plus":
            const id = payload;
            const updatedCart = state.cart.map((item) => {
                if (item.id === id) {
                    const quantity = item.quanity ? item.quantity : 2;
                    return {
                        ...item,
                        quantity: quantity,
                        total: quantity * price,
                    };
                }
            });
            return { ...state, cart: updatedCart };
        default:
            return state;
    }
};
