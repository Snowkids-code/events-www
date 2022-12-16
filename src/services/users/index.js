const { default: ourApi } = require("../../api");

//function to get a user's data after login
const getUserData = async (inputs) => {
  const response = await ourApi.user.getUserData(inputs);
  return response;
};

//function to get the user data if the user reloads the site and the user cookie is available
const getUserDataById = async (Id) => {
  const response = await ourApi.user.getUserDataById(Id);
  return response;
};

//export both functions included
export default {
  getUserData,
  getUserDataById,
};
