const express = require('express')
const bodyParser = require('body-parser')
const handleURIRequest = require('./proto').handleURIRequest
const handleNFTSearch = require('./proto').handleNFTSearch
const handleNFTRegistration = require('./index').handleNFTRegistration
const handleNFTMatch = require('./index').handleNFTMatch



const app = express()
const port = process.env.EA_PORT || 8080

app.use(bodyParser.urlencoded({ extended: true }));


/**
 * Postman for below APIs:
 * https://www.getpostman.com/collections/6df3296f6a359d9dac70
 */

/////////////////// - target APIs - ///////////////


/**
 * NFT registration gateway - Client submits NFT to register     
 */
app.post('/register-nft', async (req, res) => {


    handleNFTRegistration(req.body, (status, result) => {
        console.log('Result: ', result)
        res.status(status).json(result)
    })
})

/**
 * Helper to kick off push of recommendation back onto chain
 */
app.post('/find-matching-nft', async (req, res) => {
    console.log('POST Data: ', req.body)

    handleNFTMatch(req.body, (status, result) => {
        console.log('Result: ', result)
        res.status(status).json(result)
    })
})

/////////////////// - protyping APIs only - ///////////////

/**
 * Standalone API service that calls into blockchain to retrieve token uri link
 */

app.post('/token-uri', async (req, res) => {
    console.log('POST Data: ', req.body)

    handleURIRequest(req.body, (status, result) => {
        console.log('Result: ', result)
        res.status(status).json(result)
    })
})
/**
 * NFTPort API service that matches token
 */
app.post('/api-search', async (req, res) => {
    console.log('POST Data: ', req.body)

    handleNFTSearch(req.body, (status, result) => {
        console.log('Result: ', result)
        res.status(status).json(result)
    })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))