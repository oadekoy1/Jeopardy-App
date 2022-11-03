import express from 'express'
// import mongoose from 'mongoose'
// import favicon from 'serve-favicon'
import morgan from 'morgan'
// import path from 'path'





const app = express()
const PORT = process.env.PORT || 3001

app.use(morgan('dev'))
app.use(express.json())
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
// app.use(express.static(path.join(__dirname, 'build')))


app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})