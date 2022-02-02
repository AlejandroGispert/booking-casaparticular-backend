const { buildSchema } = require("graphql");

module.exports = buildSchema(`

type SuperBooking {
  _id: ID!
  name: String!
  country: String!
  email: String!
  room: String!
  persons: Float!
  price: Float!
  comments: String!
  fromDate: String!
  toDate: String!
  dateofSentRequest: String!
  statusOfSuperBooking: String!
}

type NewStatusOfSuperBooking {
  statusOfSuperBooking: String!
}

 type BookedSuperBooking {
    _id: ID!
    superBooking: SuperBooking!
    user: User!
    fromDate: String!
    toDate: String!
    createdAt: String!
    updatedAt: String!
  }

type Booking {
    _id: ID!
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String!
}
type Event {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
  creator: User!
}
type User {
  _id: ID!
  email: String!
  password: String
  createdEvents: [Event!]
}
type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

input StatusOfSuperBookinginput {
  statusOfSuperBooking: String!
}

input SuperBookingInput {
  
  name: String!
  country: String!
  email: String!
  room: String!
  persons: Float!
  price: Float!
  comments: String!
  fromDate: String!
  toDate: String!
  dateofSentRequest: String!
  statusOfSuperBooking: String!
}


input EventInput {
  title: String!
  description: String!
  price: Float!
  date: String!
}
input UserInput {
  email: String!
  password: String!
}
type RootQuery {
    events: [Event!]!
    bookings: [Booking!]!
    login(email: String!, password: String!): AuthData!

    superBookings: [SuperBooking!]!
   
}
type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
    bookEvent(eventId: ID!): Booking!

    
    bookSuperBooking(superBookingId: ID!): BookedSuperBooking!
    
    cancelBooking(bookingId: ID!): Event!

    createSuperBooking(superBookingInput: SuperBookingInput): SuperBooking

    cancelsuperBooking(superbookingId: ID!): String



    updatesuperBooking(superbookingId: ID!, statusOfSuperBookinginput: StatusOfSuperBookinginput): NewStatusOfSuperBooking

}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);
// update not working up here

// type SuperBookingStatus {
//   _id: ID!
//   statusOfSuperBooking: StatusOfSuperBooking!
// }
//  statusOfSuperBooking: [SuperBookingStatus!]!
// changeSBstatus(superBookingId: ID!): SuperBookingStatus!
// changeSBstatus(superBookingId: ID!): SBookingstatus!

// cancelSBooking(superBookingId: ID!): Event!

// bookSuperBooking(superBookingId: ID!): BookedSuperBooking!

// type BookedSuperBooking {
//   _id: ID!
//   superBooking: SuperBooking!
//   user: User!
//   fromDate: String!
//   toDate: String!
//   createdAt: String!
//   updatedAt: String!
// }
