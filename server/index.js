const express = require('express');
const bodyParser = require('body-parser');
const scoreCtrl = require('./controllers/score_controllers');

const app = express();



app.use(bodyParser.json())


app.post('/api/submitScore', scoreCtrl.submitScore);

app.get('/api/getScores', scoreCtrl.getScores);

app.put('/api/updateScore/:name', scoreCtrl.updateScore);

app.delete('/api/deleteScore/:id', scoreCtrl.deleteScore);


const port = 4545

app.listen(port, () => {
    console.log(`The Grand Magus is listening on Port ${port}`)
})




