class CartItem {
    constructor(quantity, productPrice, productMrp, productType, productTitle, sum) {
      this.quantity = quantity;
      this.productPrice = productPrice;
      this.productMrp = productMrp;
      this.productType = productType;
      this.productTitle = productTitle;
      this.sum = sum;
    }
}
  
export default CartItem;