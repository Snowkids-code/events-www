const { default: ourApi } = require("../../api");

const addOrder = async (data) => {
    const response = await ourApi.order.addOrder(data);
    return response;
}

const getAllOrders = async () => {
    const response = await ourApi.order.getAllOrders();
    return response;
}

export default {
    addOrder,
    getAllOrders
  };