import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: 'work_Database'
        })
        console.log(connection);
    } catch (error) {
        console.log(`Error While Connecting Database ${error} `)
    }
}