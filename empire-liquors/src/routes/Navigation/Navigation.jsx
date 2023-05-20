import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/img/crown.svg";
import { UserContext } from "../../contexts/UserContext";
import "./Navigation.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    const res = await signOutUser();
    setCurrentUser(null);
  }

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
            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
