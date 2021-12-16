import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logOut } from "../actions/actions";
import MenuIcon from "@mui/icons-material/Menu";

const Header = props => {
  useEffect(() => {
    console.log(props.userR);
  }, [props]);
  const history = useHistory();
  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.cart);
  const [show, setShow] = useState(false);
  // let [cartCount, setCartCount] = useState(0);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.setItem("token", "");
    history.push("/");
    window.location.reload();
  };
  const handleNavClick = () => {
    setShow(!show);
  };
  useEffect(() => {
    console.log("RERENDER");
  }, []);
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="navbarLeft">
          <h2>Moms&Mini</h2>
          <MenuIcon
            className="menuBtn"
            fontSize="large"
            onClick={handleNavClick}
          />
        </div>
        <div className={show ? "navbarRight show" : "navbarRight"}>
          <Link to="/" onClick={handleNavClick}>
            Home
          </Link>
          <Link to="/products" onClick={handleNavClick}>
            Products
          </Link>
          <Link to="/aboutUs" onClick={handleNavClick}>
            About Us
          </Link>
          {user.loggedIn ? (
            <a onClick={handleLogOut}>Log Out</a>
          ) : (
            <Link to="/login" onClick={handleNavClick}>
              Log In
            </Link>
          )}
          <div className="cartLogo">
            <Link to="/cart" onClick={handleNavClick}>
              <img src="./cartLogo.png" />
              <p>{cart.length}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartR: state.cart,
  };
};

export default connect(mapStateToProps, null)(Header);
