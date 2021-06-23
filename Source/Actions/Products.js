import Products from '../../Model/Products';

export const SET_PRODUCTS = 'SET_PRODUCTS'

export const fetchProducts = () => {
    return async dispatch => {
        const response = await fetch ('https://saarth-store.herokuapp.com/api/product');
        const resData = await response.json();
        let loadedProduct = [];
        for(let i = 0; i < resData.length; i++) {
            let img = `https://saarth-store.herokuapp.com/api/inventory/${resData[i].id}/download`;
            loadedProduct.push(new Products(resData[i].id, img, resData[i].name, resData[i].price, 
                resData[i].gst,  resData[i].maxPrice, resData[i].storeName, 
                resData[i].type, resData[i].subType, resData[i].stock))
        }
        dispatch({type: SET_PRODUCTS, products: loadedProduct})
    }
}