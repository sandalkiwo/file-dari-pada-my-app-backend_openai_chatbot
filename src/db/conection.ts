import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
  try {
    await connect(process.env.MONGO_DB_URL);
  } catch (err) {
    console.log(err);

    throw new Error("Can't Not Connect To MongoDB!!!");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Can't Not Disconnect From MongoDB!!!");
  }
}

export { connectToDatabase, disconnectFromDatabase }