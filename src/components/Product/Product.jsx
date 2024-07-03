import "./Product.css";

function Product(props) {
  const { product, addToCart } = props;

  const handleClick = () => {
    addToCart(product);
  };
  return (
    <div className="product-container">
      <div>
        <img className="product-img" src={product.img} />
      </div>
      <div className="text-container">{product.name}</div>
      <div className="aboutp-container">{product.about}</div>
      <div className="price-container">{product.price} ₪</div>
      <button className="button-add" onClick={handleClick}>
        הוסף לסל
      </button>
    </div>
  );
}

export default Product;
