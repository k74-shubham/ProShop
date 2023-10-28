import mongoose from "mongoose";


export const Connection = async () => {
    const URL = process.env.URL;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log(`Database Connected Successfully`);
    } catch (error) {
        console.log(`Error While connecting to the database ${error.message}`);
    }
}


export default Connection;