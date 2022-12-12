const { default: ourApi } = require("../../api")

//get all events
const getAllEvents = async()=>{
    const response = await ourApi.events.getAllEvents()
    return response;
}

export default {
    getAllEvents
}