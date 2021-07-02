const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const dbService = require('./dbService')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.json({ API: "1.0.0" })
})

// create
app.post('/insert', (req, resp) => {

})

// read
app.get('/posts', (req, resp) => {
    const db = dbService.getDbServiceInstance()
    const result = db.getAllPosts()
    .then(data => resp.json(data))
    .catch(err => console.log(err))
})

app.get('/post/:id', (req, resp) => {
    const id = req.params.id
    const db = dbService.getDbServiceInstance()
    const result = db.getPostById(id)
    .then(data => resp.json(data))
    .catch(err => console.log(err))
})

// update


// delete


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`API is running on port ${port}`))