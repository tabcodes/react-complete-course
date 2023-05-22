import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg";
import "./CartIcon.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
const CartIcon = () => {

  const { cartVisible, setCartVisible } = useContext(CartContext)
  const toggleCartVisibility = () => setCartVisible(!cartVisible)
  const visibilityHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className="cart-icon-container"  onClick={toggleCartVisibility}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
