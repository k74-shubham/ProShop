import mongoose from "mongoose";

export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@proshop-cluster.pgvb7we.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log(`Database Connected Successfully`);
    } catch (error) {
        console.log(`Error While connecting to the database ${error.message}`);
    }
}

export default Connection;