const express = require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const bookRoutes=require('./src/books/book.route')
dotenv.config()
require('./config')
const app = express()
const port=process.env.PORT
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.get('/', (req, res) => {
    res.send('Book store server is running')
})
app.use('/api/books', bookRoutes)
app.listen(port, () => console.log(`Server running successful ${port}`))