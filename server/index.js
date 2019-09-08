import express from 'express';
import { getFakeDataHelper } from '../data/mockData';

const app = express();
const port = 3001;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Random Rating app listening on port ${port}`);
});

const data = getFakeDataHelper();

// API end point to generate the books and its rating randomly..
app.get("/advisors", (req, res) => {
    res.status(200).send(data);
});