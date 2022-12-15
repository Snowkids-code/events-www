const { default: ourApi } = require("../../api");

const getUserData = async (inputs) => {
  const response = await ourApi.user.getUserData(inputs);
  return response;
};

const getUserDataById = async (Id) => {
  const response = await ourApi.user.getUserDataById(Id);
  return response;
};

export default {
  getUserData,
  getUserDataById,
};
