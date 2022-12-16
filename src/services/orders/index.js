const { default: ourApi } = require("../../api");

//function to add an order
const addOrder = async (data) => {
    const response = await ourApi.order.addOrder(data);
    return response;
}

//function to get all the orders
const getAllOrders = async () => {
    const response = await ourApi.order.getAllOrders();
    return response;
}

//export the above functions
export default {
    addOrder,
    getAllOrders
  };