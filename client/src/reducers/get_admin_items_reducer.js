import { ADMIN_GET_REQ } from "../actions/action_constants";

export default function(state = {}, action) {
  switch (action.type) {
    case ADMIN_GET_REQ:
      console.log("IN GET ADMINS REQUSET REDUCER");
      return action.payload.data;
    default:
      return state;
  }
};
