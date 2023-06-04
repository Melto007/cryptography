import mongoose from 'mongoose'
import app from './app.js'
import config from './config/index.js'

(async () => {
    await mongoose.connect(config.MONGODB_URI)
    console.log("DB is connected")

    app.on("error", (error) => {
        console.log("DB is not connected", error)
        throw error
    })

    const onListening = () => {
        console.log(`Server is running on PORT ${config.PORT}`)
    }

    app.listen(config.PORT, onListening)
})()