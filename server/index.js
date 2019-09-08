import express from 'express';
import { getFakeDataHelper } from '../data/mockData';

const app = express();
const port = 3001;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Advisors List app listening on port ${port}`);
});

app.get("/advisors", (req, res) => {
    const length = req.query.itemLength || 10;
    const data = getFakeDataHelper(length);
    res.status(200).send(data);
});