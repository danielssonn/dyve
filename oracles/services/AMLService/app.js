const express = require('express')
const bodyParser = require('body-parser')
const handleRequest = require('./index').handleRequest

const app = express()
const port = process.env.EA_PORT || 8080

app.use(bodyParser.json())


/**
 * This represents the standalone API service that is called by the Oracle.
 * Deployed as APIs on AWS API gateway, eventually would be the 'real' AML service 
 */

app.post('/', (req, res) => {
    console.log('POST Data: ', req.body)
    handleRequest(req.body, (status, result) => {
        console.log('Result: ', result)
        res.status(status).json(result)
    })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))