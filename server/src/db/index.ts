import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    let DB_CONNECTIONS_STRING = "";
    if (process.env.NODE_ENV === "development") {
      DB_CONNECTIONS_STRING = process.env.MONGODB_LOCAL_URI!;
    }
    if (process.env.NODE_ENV === "production") {
      DB_CONNECTIONS_STRING = process.env.MONGODB_URI!;
    }

    const dbResponse = await mongoose.connect(DB_CONNECTIONS_STRING);
    console.log("DB connected Successfully.", dbResponse.connection.host);
  } catch (error) {
    console.log("DB connected error", error);
    process.exit(1);
  }
};
