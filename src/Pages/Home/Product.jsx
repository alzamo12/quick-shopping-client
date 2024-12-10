

const Product = ({product}) => {

    const {img, name, price, seller, ratings} = product;

    return (
        <div className='product'>
        <img src={img} alt="" />
        <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>
        </div>
        <button className='btn-cart'>
            Add to Cart
            {/* <FontAwesomeIcon icon={FaShoppingCart} /> */}
            </button>
    </div>
    );
};

export default Product;