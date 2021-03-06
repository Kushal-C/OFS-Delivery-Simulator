import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../actions/index";

class Sidebar extends Component {

  logoutReq() {
    logout();
  }

  render() {
    return <div className="col-md-3">
        <ul>
          <li className="no-hover" style={{ fontWeight: "bold", fontSize: "27px" }}>
            OFS Delivery
          </li>
          <Link to="/dashboard/featured" style={{ textDecoration: "none" }}>
            <li onClick={this.props.routeUpdate}>Featured Items</li>
          </Link>
          <Link to="/dashboard/groceries" style={{ textDecoration: "none" }}>
            <li onClick={this.props.routeUpdate}>Groceries</li>
          </Link>
          <Link to="/dashboard/bakery" style={{ textDecoration: "none" }}>
            <li onClick={this.props.routeUpdate}>Bakery</li>
          </Link>
          <Link to="/dashboard/drinks" style={{ textDecoration: "none" }}>
            <li onClick={this.props.routeUpdate}>Drinks</li>
          </Link>
          <Link to="/dashboard/snacks" style={{ textDecoration: "none" }}>
            <li onClick={this.props.routeUpdate}>Snacks</li>
          </Link>
          <Link to="/dashboard/pastorders" style={{ textDecoration: "none" }}>
            <li>Past Orders</li>
          </Link>
          <Link to="/dashboard/cart" style={{ textDecoration: "none" }}>
            <li>Shopping Cart</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "#e74c3c" }}>
            <li onClick={() => this.logoutReq()}>Sign Out</li>
          </Link>
        </ul>
      </div>;
  }
}

export default Sidebar;
