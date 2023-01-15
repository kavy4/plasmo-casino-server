const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 5000

app.listen(PORT, () => console.log(`Server worked: http://localhost:${PORT}`))

app.use(cors())
app.use(express.json())

const userList = []

app.get('/api/get-user', (request, response) => {
    response.json(JSON.stringify(userList))
})

app.post('/api/register', (request, response) => {
    userList.push(request.body)
    console.log(userList)
})

app.get('/api/clear-user', (request, response) => {
    userList.length = 0
    response.json('UserArray clear')
    console.log(userList)
})