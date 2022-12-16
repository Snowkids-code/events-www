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

//assinging objects to a variable - EventService
const EventService = {
  getAllEvents,
  getSingleEvent,
}

//export EventSrevice as the default
export default EventService;
