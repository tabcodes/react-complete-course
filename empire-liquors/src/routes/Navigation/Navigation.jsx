import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/img/crown.svg";
import { UserContext } from "../../contexts/UserContext";
import "./Navigation.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { CartContext } from "../../contexts/CartContext";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartVisible } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/">
          <div className="logo">
            <CrownLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {cartVisible && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
