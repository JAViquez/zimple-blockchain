import express from 'express'
import bodyParser from 'body-parser'
import { addBlock } from './services/addBlock';
import { getBlockchain } from './services/getBlockchain';
import { MariaDbAdapter } from './adapters/MariaDbAdapter';
import { verify } from './services/verify'

const app = express();
const port = 8080;


// parse application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

const db = new MariaDbAdapter()

app.post('/blocks', async (req, res) => {
    try {
        const { data } = req.body
        if(!data) {
            res.status(400).json({
                "errorMessage": "missing data argument"
            });
            return;
        }
        const result = await addBlock(data, db);
        res.status(200).json(result);

    } catch(err){
        res.status(500).json({
            errorMessage: err.message
        })
    }
})

app.get('/blockchain', async (req, res) => {
    try {
        const blockchain = await getBlockchain(db);
        res.json(blockchain);
    } catch (err) {
        res.status(500).json({
            errorMessage: err.message
        })
    }
})

app.get('/verifyBlockchain', async (req, res) => {
    try {
        const valid = await verify(db)
        res.json(valid)
    } catch (err) {
        res.status(500).json({
            errorMessage: err.message
        })
    }
})

app.listen(port, async () => {
    console.log(`The server started at http://localhost:${port}`);
})