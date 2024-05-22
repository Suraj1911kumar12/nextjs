import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_DB_URL)

        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log(' Database Connecetd');
        })
        connection.on('error', (err) => {
            console.log("Error on Connecting Database" + err);
            process.exit()
        })

        console.log(connection);
    } catch (error) {
        console.log(`Error While Connecting Database ${error} `)
    }
}