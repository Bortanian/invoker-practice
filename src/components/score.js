import React, { Component } from 'react'
import '../App.css'
import axios from 'axios'

class Score extends Component {
    constructor(){
        super();

        this.state = {
            playerName: '',
            scores: []
            
        }

    }
    componentDidMount() {
        axios.get('/api/getScores').then(res => {
            console.log(res.data)
            this.setState({ scores: res.data})
        })
    }


    submit(){
        axios.post('/api/submitScore', {name: this.state.playerName, score: this.props.score}).then(res => {
            this.setState({
                scores: res.data,
                playerName: ''
            })
        })
        this.props.resetScore();
    }

    update() {
        for(let i = 0; i < this.state.scores.length; i++){         
            if(this.state.playerName === this.state.scores[i].name && this.props.score > this.state.scores[i].score ){
                console.log("I found the name and I'm going to update")
                axios.put(`/api/updateScore/${this.state.playerName}`, {score: this.props.score}).then(res => {
                    this.setState({
                        scores: res.data,
                        playerName: ''
                    })
                })
            } else if(this.state.playerName === this.state.scores[i].name && this.props.score < this.state.scores[i].score ){
                this.props.resetScore();
                console.log("I found the name but the score was too low")
                alert('Your previous score was higher. We did not log you most recent score.')
                this.setState({
                    playerName: ''
                })
                return;
            }
        }    
        this.props.resetScore();
    }

    deleteScore(id) {
        axios.delete(`/api/deleteScore/${id}`).then(res => {
            this.setState({
                scores: res.data
            })
        })
    }

    render(){
    let mappedScores = [].concat(this.state.scores)
        .sort((a, b) => b.score - a.score)
        .map((player, i) => {
            return(
                <div id='name-score' key={i} >
                    <p id='leader-score'>{i + 1}. {player.name} : {player.score}
                    <button id='delete-score' onClick={() => this.deleteScore(player.id)}></button></p>
                    
                </div> 
            )
        
        })
        return(
            <div className='scores'>
              <p>LEADER BOARD</p>
              {mappedScores}
                <div className='submit'>
                <p>Score: {this.props.score}</p>
                  <input value={this.state.playerName} placeholder='Name' onChange={e => this.setState({playerName: e.target.value})} />
                  <button onClick={() => this.submit()} >SUBMIT</button>
                  <button onClick={() => this.update()} >UPDATE SCORE</button>
                </div>   
            </div>
        )
    }
}

export default Score