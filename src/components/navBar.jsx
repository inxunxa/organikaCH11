// imrc
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import "font-awesome/css/font-awesome.css";
import { connect } from "react-redux";

// cc
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#fff" }}
      >
        <Link className="navbar-brand" to="/">
          Organika
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo">
                Todo
              </Link>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <Link className="btn btn-outline-info my-2 my-sm-0" to="/cart">
              <i class="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
              View cart
              <span class="badge badge-primary cart-badge">
                {this.props.count}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.cart.length,
  };
};

export default connect(mapStateToProps, null)(NavBar);
