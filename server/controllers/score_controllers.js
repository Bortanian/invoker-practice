let scores = [];

let id = 1;

module.exports = {
    getScores: (req, res) => {
        res.status(200).send(scores)
    },
    submitScore: (req, res) => {
        scores.push({
            id: id,
            name: req.body.name,
            score: req.body.score
        })
        res.status(200).send(scores)
        id++
    },
    deleteScore: (req, res) => {
        let playerIndex = scores.indexOf(player => player.id == req.params.id)
        scores.splice(playerIndex, 1)
        res.status(200).send(scores)
    },
    updateScore: (req, res) => {
        let playerIndex = 0;
        for(let i = 0; i < scores.length; i++){
            if(scores[i].name === req.params.name){
                playerIndex = i;
            }
        }
        let playerToUpdate = scores[playerIndex];
        scores[playerIndex].score = req.body.score
        res.status(200).send(scores)
    }
    
}