import express from 'express'
import bodyParser from 'body-parser'
import { addBlock } from './services/addBlock';
import { getBlockchain } from './services/getBlockchain';
import { InMemoryDbAdapter } from './adapters/InMemoryDbAdapter';

const app = express();
const port = 8080;


// parse application/json
app.use(bodyParser.json())

const dbAdapter = new InMemoryDbAdapter()

app.post('/blocks', async (req, res) => {
    try {
        const { data } = req.body
        if(!data) {
            res.status(400).json({
                "errorMessage": "missing data argument"
            });
        }
        const result = await addBlock(data, dbAdapter);
        res.status(200).json(result);

    } catch(err){
        res.status(500).json({
            errorMessage: err.message
        })
    }
})

app.get('/blockchain', async (req, res) => {
    try {
        const blockchain = await getBlockchain(dbAdapter);
        res.json(blockchain);
    } catch (err) {
        res.status(500).json({
            errorMessage: err.message
        })
    }
})

app.listen(port, async () => {
    console.log(`The server started at http://localhost:${port}`);
})