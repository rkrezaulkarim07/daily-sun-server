import mongoose from 'mongoose';



const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.e9x41.mongodb.net:27017,cluster0-shard-00-01.e9x41.mongodb.net:27017,cluster0-shard-00-02.e9x41.mongodb.net:27017/newsportal?ssl=true&replicaSet=atlas-wxrzhj-shard-0&authSource=admin&retryWrites=true&w=majority"`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;