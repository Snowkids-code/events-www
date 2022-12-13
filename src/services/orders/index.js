const { default: ourApi } = require("../../api");

const addOrder = async (data) => {
    const response = await ourApi.order.addOrder(data);
    return response;
}

export default {
    addOrder,
  };