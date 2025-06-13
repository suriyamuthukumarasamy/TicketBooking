import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { SearchContext } from "../../context/SearchContext";

const Navbar = () => {
  const { cartCount } = useCart();
  const { bar, setBar } = useContext(SearchContext);
  const location = useLocation();
  if (location.pathname === "/") return null;
  if(location.pathname==="/cart")return null;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary w-100 ">
        <div className="container-fluid">
          <div className="pb-0 ">
            <button className="bg-primary">
              <span style={{ fontSize: "25px" }}>🎬</span>
            </button>
            <span className="navbar-brand" href="#hashs">
              Ticket Booking
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* route link */}
                <a
                  className="nav-link active "
                  aria-current="page"
                  href="/home"
                >
                  Home
                </a>
              </li>
              {/* login link */}

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  LogOut
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              {location.pathname === "/cart" ? null : (
                <input
                  className="form-control me-3"
                  onChange={(items) => {
                    console.log("Category selected:", items.target.value);
                    setBar(items.target.value);
                  }}
                  type="text"
                  value={bar}
                  placeholder="Search"
                />
              )}
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping py-3 px-3 position-relative text-dark">
                  {cartCount() > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartCount()}
                    </span>
                  )}
                </i>
              </Link>
              <button className="btn btn-danger ms-3" type="submit">
                Exit
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


