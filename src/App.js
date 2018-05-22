import React, { Component } from 'react';
import './App.css';
import Invoke from './components/invoke';
import Orb from './components/orb';
import Score from './components/score';
import Button from './components/button';
import Spells from './components/spells';


class App extends Component {
  constructor(){
    super();

    this.state = {
      orbValueArray: [0,0,0],
      challengeSpellArray: [3, 102, 12, 30, 21, 120, 300, 210, 201, 111],
      challengePic: 'blank-challenge',
      challengeSpellValue: 0,
      orbPosOne: 'blank-orb',
      orbPosTwo: 'blank-orb',
      orbPosThree: 'blank-orb',
      spellInvoked: '',
      invokedPic: 'blank-spell',
      spellValue: 0,
      currentScore: 0,
      timeLeft: 30,

    }
    this.timer = 0;

    this.addWexToOrbArray = this.addWexToOrbArray.bind(this)
    this.addQuasToOrbArray = this.addQuasToOrbArray.bind(this)
    this.addExortToOrbArray = this.addExortToOrbArray.bind(this)
    this.handleKeypress = this.handleKeypress.bind(this)
    this.checkOrbPosOne = this.checkOrbPosOne.bind(this)
    this.checkOrbPosTwo = this.checkOrbPosTwo.bind(this)
    this.checkOrbPosThree = this.checkOrbPosThree.bind(this)
    this.addToScore = this.addToScore.bind(this)
    this.invokeSpell = this.invokeSpell.bind(this)
    this.resetScore = this.resetScore.bind(this)
    this.getChallenge = this.getChallenge.bind(this)
    this.checkChallenge = this.checkChallenge.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.countdown = this.countdown.bind(this)

  }
  componentDidMount() {
    alert('TYPE NAME INTO SCORE BOX THEN HIT START TO PLAY')
    

 }

  handleKeypress(event){
    
    if(event.key === 'q'){
      this.addQuasToOrbArray(this.state.orbValueArray);
    }
    if(event.key === 'w'){
      this.addWexToOrbArray(this.state.orbValueArray);
    }
    if(event.key === 'e'){
      this.addExortToOrbArray(this.state.orbValueArray);
    }
    if(event.key === 'r'){
      this.invokeSpell(this.state.orbValueArray);
      this.checkChallenge()
    }
  }
 
  addQuasToOrbArray(array){
    let newArray = array.slice();
    newArray.push(1);
    if(newArray.length > 3){
      newArray.shift();
    }
    this.setState({
      orbValueArray: newArray
    })
    this.checkOrbPosOne(newArray);
    this.checkOrbPosTwo(newArray);
    this.checkOrbPosThree(newArray);
  }

  addWexToOrbArray(array){
    let newArray = array.slice();
    newArray.push(10);
    if(newArray.length > 3){
      newArray.shift();
    }
    this.setState({
      orbValueArray: newArray
    })
    this.checkOrbPosOne(newArray);
    this.checkOrbPosTwo(newArray);
    this.checkOrbPosThree(newArray);
  }

  addExortToOrbArray(array){
    let newArray = array.slice();
    newArray.push(100);
    if(newArray.length > 3){
      newArray.shift();
    }
    this.setState({
      orbValueArray: newArray
    })
    this.checkOrbPosOne(newArray);
    this.checkOrbPosTwo(newArray);
    this.checkOrbPosThree(newArray);
  }

  checkOrbPosOne(arr){
     if(arr[2] === 1){
      this.setState({
        orbPosOne: 'quas'
      })
    } else if(arr[2] === 10){
      this.setState({
        orbPosOne: 'wex'
      })
    } else if(arr[2] === 100){
      this.setState({
        orbPosOne: 'exort'
      })
    }
  }

  checkOrbPosTwo(arr){
    if(arr[1] === 1){
      this.setState({
        orbPosTwo: 'quas'
      })
    } else if(arr[1] === 10){
      this.setState({
        orbPosTwo: 'wex'
      })
    } else if(arr[1] === 100){
      this.setState({
        orbPosTwo: 'exort'
      })
    }
  }

  checkOrbPosThree(arr){
    if(arr[0] === 1){
      this.setState({
        orbPosThree: 'quas'
      })
    } else if(arr[0] === 10){
      this.setState({
        orbPosThree: 'wex'
      })
    } else if(arr[0] === 100){
      this.setState({
        orbPosThree: 'exort'
      })
    }
  }

  resetValues(){
    this.setState({
      orbPosOne: 'blank-orb',
      orbPosTwo: 'blank-orb',
      orbPosThree: 'blank-orb',
      orbValueArray: [0,0,0]
    })
  }


  invokeSpell(array){
    let newArray = array.slice();
    let spellVal = newArray.reduce((total, num) => total + num)
    this.setState({
      spellValue: spellVal, 
    })
    if(spellVal === 3){
      this.setState({
        invokedPic: 'cold-snap',
        spellInvoked: 'Cold Snap'
      })
    }
    if(spellVal === 102){
      this.setState({
        invokedPic: 'ice-wall',
        spellInvoked: 'Ice Wall'
      })
    }
    if(spellVal === 12){
      this.setState({
        invokedPic: 'ghost-walk',
        spellInvoked: 'Ghost Walk'
      })
    }
    if(spellVal === 30){
      this.setState({
        invokedPic: 'emp',
        spellInvoked: 'EMP'
      })
    }
    if(spellVal === 21){
      this.setState({
        invokedPic: 'tornado',
        spellInvoked: 'Tornado'
      })
    }
    if(spellVal === 120){
      this.setState({
        invokedPic: 'alacrity',
        spellInvoked: 'Alacrity'
      })
    }
    if(spellVal === 300){
      this.setState({
        invokedPic: 'sun-strike',
        spellInvoked: 'Sun Strike'
      })
    }
    if(spellVal === 210){
      this.setState({
        invokedPic: 'chaos-meteor',
        spellInvoked: 'Chaos Meteor'
      })
    }
    if(spellVal === 201){
      this.setState({
        invokedPic: 'forge-spirits',
        spellInvoked: 'Forge Spirits'
      })
    }
    if(spellVal === 111){
      this.setState({
        invokedPic: 'defening-blast',
        spellInvoked: 'Defening Blast'
      })
    }
    this.resetValues()
  }
  
  addToScore(scoreToUpdate){
    let updatedScore = scoreToUpdate += 100;
    this.setState({
      currentScore: updatedScore
    })
  }

  resetScore(){
    this.setState({
      currentScore: 0
    })
  }

  getChallenge(){
    let randomSpell = Math.floor(Math.random() * 10)
    if(this.state.challengeSpellArray[randomSpell] === 3){
      this.setState({
        challengePic: 'c-cold-snap',
        challengeSpellValue: 3
      })
    }
    if(this.state.challengeSpellArray[randomSpell] === 102){
      this.setState({
        challengePic: 'c-ice-wall',
        challengeSpellValue: 102
      })
    }
    if(this.state.challengeSpellArray[randomSpell] === 12){
      this.setState({
        challengePic: 'c-ghost-walk',
        challengeSpellValue: 12
      })
    }
    if(this.state.challengeSpellArray[randomSpell] === 30){
      this.setState({
        challengePic: 'c-emp',
        challengeSpellValue: 30
      })
    }
    if(this.state.challengeSpellArray[randomSpell] === 21){
      this.setState({
        challengePic: 'c-tornado',
        challengeSpellValue: 21
      })
    }
    if(this.state.challengeSpellArray[randomSpell] === 120){
      this.setState({
        challengePic: 'c-alacrity',
        challengeSpellValue: 120
      })
    }
    if(this.state.challengeSpellArray[randomSpell] === 300){
      this.setState({
        challengePic: 'c-sun-strike',
        challengeSpellValue: 300
      })
    }
    if(this.state.challengeSpellArray[randomSpell] === 210){
      this.setState({
        challengePic: 'c-chaos-meteor',
        challengeSpellValue: 210
      })
    }
    if(this.state.challengeSpellArray[randomSpell] === 201){
      this.setState({
        challengePic: 'c-forge-spirits',
        challengeSpellValue: 201
      })
    }
    if(this.state.challengeSpellArray[randomSpell] === 111){
      this.setState({
        challengePic: 'c-defening-blast',
        challengeSpellValue: 111
      })
    }
  }

  checkChallenge(){
    if(this.state.challengeSpellValue === this.state.spellValue){
      this.addToScore(this.state.currentScore)
      this.getChallenge()
    }
  }

  startTimer(){
    document.addEventListener("keydown", this.handleKeypress, false)
    this.getChallenge()
    this.setState({
      timeLeft: 30
    })
    if(this.timer === 0){
      this.timer = setInterval(this.countdown, 1000);
    }
  }

  countdown() {
    let seconds = this.state.timeLeft - 1;
    this.setState({
      timeLeft: seconds
    });

    if(seconds === 0) {
      clearInterval(this.timer)
      alert('GAME OVER. SUBMIT SCORE.')
      this.timer = 0;
    }
  }
  



  render() {
    
    return (
      <div className="App" >
        <main className='proleader'>
        <Score 
            score={this.state.currentScore}
            resetScore={this.resetScore}
            />
          {/* <div id='pro-scores'>
            <p>PRO LEADER BOARD</p>
          </div>     */}
        </main>
        <main>
          <div className='time'>
            <button id='start' onClick={() => this.startTimer()}>START</button>
            TIME: {this.state.timeLeft}
          </div>
          <div className='challenge'>
            <img className={this.state.challengePic} id='border' alt=''/>
          </div>
          <Invoke 
          invokedSpellPic={this.state.invokedPic}
          />
          <div className ='orbs'> 
          <Orb orb={this.state.orbPosThree} />
          <Orb orb={this.state.orbPosTwo} />
          <Orb orb={this.state.orbPosOne} />
          </div>
          <div className='buttons'>
          <Button class='quas' passedMethod={this.addQuasToOrbArray} orbArray={this.state.orbValueArray} letter='Q'/>
          <Button class='wex' passedMethod={this.addWexToOrbArray} orbArray={this.state.orbValueArray} letter='W'/>
          <Button class='exort' passedMethod={this.addExortToOrbArray} orbArray={this.state.orbValueArray} letter='E'/>
          <Button class='invoke' passedMethod={this.invokeSpell} orbArray={this.state.orbValueArray} letter='R'/>
          </div>
          </main>
          <main className='spell-cheat'>
            <div className='spells'>
            <p>SPELLS</p>
              <Spells />
            </div>
          </main>
      </div>
    );
  }
}

export default App;
