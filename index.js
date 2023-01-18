const express = require('express')
const cors = require('cors')
const fileSystem = require('fs')
const app = express()
const PORT = 5000

app.listen(PORT, () => console.log(`Server worked: http://localhost:${PORT}`))

app.use(cors())
app.use(express.json())

let userList = JSON.parse(fileSystem.readFileSync('./data.json', 'utf-8'))

app.get('/api/get-user', (request, response) => {
    response.json(JSON.stringify(userList))
})

app.post('/api/register', (request, response) => {
    userList.push(request.body)
    fileSystem.writeFileSync('./data.json', JSON.stringify(userList))
    console.log(userList)
})

app.post('/api/save-user', (request, response) => {
    console.log(request.body)
    userList.map((user, index) => {
        if (user.login == request.body.login) {
            userList[index] == request.body
            console.log('да')
        }
        else {
            console.log('no')
        }
    })
    fileSystem.writeFileSync('./data.json', JSON.stringify(userList))
})

// app.post('/api/save-user', (request, response) => {
//     userList.map((user, index) => {
//         if (user.login == request.body.login) {
//             userList[index] = request.body
//         }
//     })
// })

app.get('/api/clear-user', (request, response) => {
    userList.length = 0
    response.json('UserArray clear')
    console.log(userList)
})