import mongoose from 'mongoose';
import config from 'config';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

//Get the connection string
const db = process.env.MONGOURI || config.get('mongoURI');

//Connect to MongoDB
const connectDatabase = async () => {
    try {
        await mongoose.connect(db);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error(error.message);

        //Exit with failure code
        process.exit(1);
    }
};

export default connectDatabase;