import {productTypes} from "./../actions/actionTypes";

const initialState = {
   products: [],
      
       
        loading: false,
        error: null,
        productsLoaded: false
  
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case productTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                loading: true
            }
        case productTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: actions.payload,
                // id: actions.payload.id,
                // title: actions.payload.title,
                // description: actions.payload.description,
                // price: actions.payload.price,
                // image_url: actions.payload.image_url,
                // category: actions.payload.category,
                loading: false,
                error: false,
                productsLoaded: true
            }
        case productTypes.FETCH_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: actions.payload,
            }
        default:
            return state;
    }
}