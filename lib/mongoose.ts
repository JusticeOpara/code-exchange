import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
    mongoose.set("strictQuery", true);
  
    if (!process.env.MONGODB_URL) {
      return console.log("MONGODB_URI is not defined");
    } else if (isConnected) {
      return;
    }
  
    try {
      await mongoose.connect(process.env.MONGODB_URL, {
        dbName: "code-exchange",
      });
      isConnected = true;
      console.log("Connected to the database");
    } catch (error) {
      console.log(error);
    }
  };
  
  export const runWithDatabase = async (callback: () => Promise<any>) => {
    connectToDatabase();
    try {
      return await callback();
    } catch (error) {
      console.log(error);
    }
  };
  
