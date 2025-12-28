import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("Connected", ()=>{console.log("Database Connected successfully")})

        let mongodbURI = process.env.MONGODB_URI
        const projectName = "resume-builder"
        if(!mongodbURI){
            throw new Error("MongoDB URI env not set!")
        }

        if(mongodbURI.endsWith("/")){
            mongodbURI = mongodbURI.slice(0,-1)
        }

        await mongoose.connect(`${mongodbURI}/${projectName}`)
        console.log("DB Connected")
    } catch (error) {
        console.error("Error connecting to MongoDB"+error)        
    }
}

export default connectDB;