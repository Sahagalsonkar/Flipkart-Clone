


export const getProductsReducer = (state={products: [] }, action) => {
    switch (action.type) {
        case 'getProductSuccess':
            return{
                products:action.payload
            }
        case 'getProductfail':
            return{
                error:action.payload
            }
        default:
            return state;
    }

};