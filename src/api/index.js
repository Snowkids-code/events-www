import axios from "axios";

let ourApi = {
  //events APIs
  events: {
    getAllEvents: async () => await axios.get("http://localhost:500/api/event"),
    getSingleEvent: async (itemId) =>
      await axios.get(`http://localhost:500/api/event/find/${itemId}`),
  },
  //cart APIs
  cart: {
    addToCart: async () =>
      await axios.post("http://localhost:2121/api/cart/add-to-cart"),
  },
  //user APIs
  user: {
    getUserData: async (inputs) =>
      await axios.post("http://localhost:500/api/auth/login", inputs),
    getUserDataById: async (Id) =>
      await axios.get(`http://localhost:500/api/user/find/${Id}`),
  },
  //Order APIs
  order: {
    addOrder: async (data) =>
      await axios.post("http://localhost:500/api/order", data),
    getAllOrders: async () => await axios.get("http://localhost:500/api/order"),
  },
};

//export all the above APIs
export default ourApi;
