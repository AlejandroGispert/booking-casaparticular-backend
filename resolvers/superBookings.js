const SuperBooking = require("../models/superBooking");

const { transformSuperBooking } = require("./merge");
const { dateToString } = require("../helpers/date");
const { resolveObjMapThunk } = require("graphql");

module.exports = {
  superBookings: () => {
    return SuperBooking.find()
      .then((superBookings) => {
        return superBookings.map((superBooking) => {
          return { ...superBooking._doc };
        });
      })
      .catch();
  },

  createSuperBooking: (args) => {
    const superBooking = new SuperBooking({
      name: args.superBookingInput.name,
      country: args.superBookingInput.country,
      email: args.superBookingInput.email,
      room: args.superBookingInput.room,
      persons: args.superBookingInput.persons,
      price: +args.superBookingInput.price,
      comments: args.superBookingInput.comments,
      fromDate: args.superBookingInput.fromDate,
      toDate: args.superBookingInput.toDate,
      dateofSentRequest: args.superBookingInput.dateofSentRequest,
      statusOfSuperBooking: args.superBookingInput.statusOfSuperBooking,
    });

    return superBooking
      .save()
      .then((result) => {
        console.log(result);
        return { ...result._doc };
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  },

  // statusOfSuperBooking: async (args, req) => {
  //   const fetchedSuperbooking = await SuperBooking.findOne({
  //     _id: args.superBookingId,
  //   });
  //   const superBooking = new SuperBooking({
  //     // user: req.userId,
  //     SuperBooking: fetchedSuperbooking,
  //   });
  //   const result = await superBooking.save();
  //   return transformSuperBooking(result);
  // },
  cancelsuperBooking: async (args, req) => {
    // if (!req.isAuth) {
    //   throw new Error("Unauthenticated!");
    // }
    try {
      // to find the superbooking id
      const superbooking = await SuperBooking.findById(args.superbookingId);

      // to see it as the whole object
      const event = {
        ...superbooking._doc,
        _id: superbooking.id,
      };
      console.log("YOU DELETED THIS: " + event);
      await superbooking.deleteOne({ _id: args.superbookingId });
      return "Successfully Deleted SuperBooking Item";
    } catch (err) {
      throw err;
    }
  },

  // updatesuperBooking: async (args, req) => {
  // if (!req.isAuth) {
  //   throw new Error("Unauthenticated!");
  // }
  // try {
  //   // to find the superbooking id
  //   const superbooking = await SuperBooking.findOne(
  //     { _id: superbooking.id },
  //     { $set: { statusOfSuperBookinginput: args.statusOfSuperBookinginput } },
  //     { new: true }
  //   );
  //   // to see it as the whole object
  //   const event = {
  //     ...superbooking._doc,
  //     statusOfSuperBooking,
  //   };
  //   // console.log("YOU updated THIS: " + superbooking);
  //   // console.log("what is this: " + event);
  //   await superbooking.findOneAndUpdate({ _id: args.superbookingId });
  //   return superbooking;
  // } catch (err) {
  //   throw err;
  //   // }
  //   const fetchedSuperbooking2 = await SuperBooking.findOneAndUpdate({
  //     _id: req.superBookingId,
  //     $set: { statusOfSuperBookinginput: req.statusOfSuperBookinginput },
  //     new: true,
  //   });

  //   // const superBooking2 = new SuperBooking({
  //   //   user: req.userId,
  //   //   statusOfSuperBooking: fetchedSuperbooking2,
  //   // });

  //   if (args.statusOfSuperBooking !== undefined) {
  //     fetchedSuperbooking2.statusOfSuperBooking = args.statusOfSuperBooking;
  //   }
  //   // console.log("fetchedSuperbooking2" + fetchedSuperbooking2),
  //   // }
  //   return fetchedSuperbooking2;
  // },

  bookSuperBooking: async (args, req) => {
    // if (!req.isAuth) {
    //   throw new Error("Unauthenticated!");
    // }
    const fetchedSuperbooking = await SuperBooking.findOne({
      _id: args.superBookingId,
    });
    // console.log("fetched this superbooking: " + fetchedSuperbooking);
    const superBooking = new SuperBooking({
      user: req.userId,
      superBooking: fetchedSuperbooking,
    });
    // console.log("superBooking: " + superBooking);
    const result = await superBooking.save();

    return transformSuperBooking(result);
    // console.log("this is the result: " + result)
  },
};
