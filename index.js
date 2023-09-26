const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// params 방법
app.get('/user/:id', (req, res) => {
    const q = req.params
    console.log(q.id)
})

// query 방법
app.get('/tutor/:kap', (req, res) => {
    const q = req.query
    console.log(q)
    res.send(q.name)
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    
    if (name=="dog") {
        res.send({'sound': '멍멍'})
    } else if (name=="cat") {
        res.send({'sound': '야옹'})
    } else {
        res.send({'sound': '알수없음'})
    }
})

app.get('/dog', (req, res) => {
    res.send({'sound': '멍멍'})
})

app.get('/cat', (req, res) => {
    res.send({'sound': '야옹'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})