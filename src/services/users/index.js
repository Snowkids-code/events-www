const { default: ourApi } = require("../../api");

const getUserData = async (inputs) => {
  const response = await ourApi.user.getUserData(inputs);
  return response;
};

export default {
  getUserData,
};
