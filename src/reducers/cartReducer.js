const CartReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART":
            let { id, color, quantity, singleproduct } = action.payload;
            let tempCartProduct;

            tempCartProduct = {
                id: id + color,
                name: singleproduct.name,
                quantity: quantity,
                color: color,
                max_qantity: singleproduct.stock,
                image: singleproduct.image[0].url,
            }
            return {
                ...state,
                cart: [...state.cart, tempCartProduct]
            }


        default: return {
            ...state
        }
    }
}


export default CartReducer;
