const { default: ourApi } = require("../../api");

//get all events
const getAllEvents = async () => {
  const response = await ourApi.events.getAllEvents();
  return response;
};

//get a single event
const getSingleEvent = async (itemId) => {
  const response = await ourApi.events.getSingleEvent(itemId);
  return response;
};

export default {
  getAllEvents,
  getSingleEvent,
};
