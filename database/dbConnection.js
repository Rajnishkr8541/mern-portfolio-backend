import mongoose from "mongoose";

// Function to connect to MongoDB
const dbConnection = () => {
  const dburl = "mongodb+srv://rajnishkr85419:Rajnishkr123@portfolio.tq1hj.mongodb.net/?retryWrites=true"
  mongoose.connect( dburl, {
    dbName: "PORTFOLIO", // Specifies the name of the database
  })
    .then(() => {
      console.log(`Database Connected`); // Successful connection log
    })
    .catch((error) => {
      console.log(`Error occurred from DB ${error}`); // Log any connection error
    });
};

export default dbConnection;
