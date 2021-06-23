class Products {
    constructor(id, imageUrl, title, price, gst, mrp, storeName, type, subType, stock) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.storeName = storeName;
        this.type = type;
        this.subType = subType;
        this.gst = gst;
        this.mrp = mrp;
        this.price = price;
        this.stock = stock;
    }
}
export default Products;
