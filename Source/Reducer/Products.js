
import {SET_PRODUCTS} from '../Actions/Products';

const initialState = {
    availableProducts: []
}

export default (state = initialState, action) => {
    switch (action.type){
        case SET_PRODUCTS:
            return {
                availableProducts: action.products
            }
    }
    return state;
};