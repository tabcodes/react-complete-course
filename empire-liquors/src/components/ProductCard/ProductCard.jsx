import "./ProductCard.scss";

import Button from "../Button/Button";

const ProductCard = ({ product }) => {
  const { id, name, price } = product;
  const img = require("../../assets/img/bourbon/" + id + ".png");
  return (
    <div className="product-card-container">
      <img src={img} alt={`${name}`} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Button buttonType="inverted">Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
