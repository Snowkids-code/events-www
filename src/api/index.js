import axios from "axios";

let ourApi = {
  events: {
    getAllEvents: async () => await axios.get("http://localhost:500/api/event"),
    getSingleEvent: async (itemId) =>
      await axios.get(`http://localhost:500/api/event/find/${itemId}`),
  },
  cart: {
    addToCart: async () =>
      await axios.post("http://localhost:2121/api/cart/add-to-cart"),
  },
  user: {
    getUserData: async (inputs) =>
      await axios.post("http://localhost:500/api/auth/login", inputs),
  },
  order: {
    addOrder: async (data) =>
      await axios.post("http://localhost:500/api/order", data),
  },
};

export default ourApi;
