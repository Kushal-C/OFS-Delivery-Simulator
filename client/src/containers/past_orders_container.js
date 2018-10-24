import React, { Component } from "react";
import PastOrders from "../components/past_orders";

export default class PastOrdersContainer extends Component {
  render() {
    // return <PastOrders orders = {this.props.orders}></PastOrders>;
    return <PastOrders orders = {
      [
        {
          status : "processed",
          contents:
          [
            {
              name: "cake",
              quantity : 5,
              cost: 20
            },
            {
              name: "pie",
              quantity : 5,
              cost: 20
            }
          ],
          total_cost : 40
        },
        {
          status : "processed",
          contents:
          [
            {
              name: "Brocolli",
              quantity : 10,
              cost: 20
            },
            {
              name: "Mango",
              quantity : 2,
              cost: 4
            }
          ],
          total_cost : 40
        }
      ]

    }></PastOrders>
  }
}