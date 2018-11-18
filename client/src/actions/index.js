import axios from "axios";
import {
  LOGIN_REQUEST,
  REGISTRATION_REQUEST,
  GET_ITEMS_REQUEST,
  GET_USER_PROFILE,
  ADD_TO_CART_REQUEST,
  UPDATE_USER_PROFILE,
  CHECKOUT_ITEMS,
  PLACE_ORDER_REQUEST,
  EMPTY_CART_REQUEST,
  GET_CART_ITEMS_REQUEST,
  GET_PAST_ORDERS_REQUEST,
  GET_CHECKOUT_CONTENTS_REQUEST,
  LOGOUT_REQUEST
} from "./action_constants";

const route = "http://localhost:5000";

export function login(info) {
  let request = axios.post(route + "/api/login", info);
  return {
    type: LOGIN_REQUEST,
    payload: request
  };
}

export function register(info) {
  const request = axios.post(route + "/api/register", info);
  return {
    type: REGISTRATION_REQUEST,
    payload: request
  };
}
export function getItemsRequest(category) {
  const request = axios.get(route + `/api/dashboard/${category}`);
  return {
    type: GET_ITEMS_REQUEST,
    payload: request
  };
}
export function getUserProfile(id) {
  const request = axios.get(route + `/api/profile/${id}`);
  return {
    type: GET_USER_PROFILE,
    payload: request
  };
}

export function updateUserProfile(profile) {
  const request = axios.post(route + "/api/profile", profile);
  return {
    type: UPDATE_USER_PROFILE,
    payload: request
  };
}

export function purchase(userId) {
  const request = axios.post(route + "/api/purchase/" + userId);
  return {
    type: CHECKOUT_ITEMS,
    payload: request
  };
}

export function addToCart(item) {
  const request = axios.post(route + "/dashboard/featured", item);
  return {
    type: ADD_TO_CART_REQUEST,
    payload: request
  };
}

export function placeOrder(item) {
  console.log("ROUTE: " + route + "/shoppingcart");
  console.log("PLACING ORDER CONTENTS: " + JSON.stringify(item));
  const request = axios.post(route + "/shoppingcart", item);
  return {
    type: PLACE_ORDER_REQUEST,
    payload: request
  };
}

export function emptyCart() {
  // const request = axios.post(route + "/shoppingCart");
  return {
    type: EMPTY_CART_REQUEST,
    payload: {items: []}
  };
}

export function getCartItemsRequest(item) {
  const request = axios.post(route + "/cartitems", item);
  return {
    type: GET_CART_ITEMS_REQUEST,
    payload: request
  };
}

export function getPastOrdersRequest(item) {
  const request = axios.post(route + "/pastorders", item);
  return {
    type: GET_PAST_ORDERS_REQUEST,
    payload: request
  };
}

export function getCheckoutItemsRequest(item) {
  const request = axios.post(route + "/estimatedroute", item);
  return {
    type: GET_CHECKOUT_CONTENTS_REQUEST,
    payload: request
  };
}

export function logout() {
  const request = axios.post(route + "/logout");
  console.log("Sending logout req");
  console.log("Request ret value: " + JSON.stringify(request));
  return {
    type: LOGOUT_REQUEST,
    payload: request
  };
}
