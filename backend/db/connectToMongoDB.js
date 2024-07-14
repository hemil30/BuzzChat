import mongoose from "mongoose";
const connectToMongoDB = async () => {
    try {
        console.log('MONGO_URI in connectToMongoDB:', process.env.MONGO_DB_URI); // Log to verify the MONGO_URI
        await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectToMongoDB;
