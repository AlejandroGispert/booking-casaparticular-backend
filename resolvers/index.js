const authResolver = require("./auth");
const eventsResolver = require("./events");
const bookingResolver = require("./booking");
const superBookingsResolver = require("./superBookings");

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingResolver,
  ...superBookingsResolver,
};

module.exports = rootResolver;
