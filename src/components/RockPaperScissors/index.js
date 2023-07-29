import {Component} from 'react'
import GameChoice from '../GameChoice'
import GameRules from '../GameRules'
import GameHeader from '../GameHeader'

import {
  MainBgContainer,
  UnOrderListContainer,
  OutputContainer,
  ResultContainer,
  DetailsContainer,
  Player,
  Image,
  WinOrLoseContainer,
  Result,
  PlayAgainButton,
} from './styledComponents'

class RockPaperScissors extends Component {
  state = {
    totalScore: '0',
    userChoice: {},
    randomChoice: {},
    renderGameResult: false,
    gameStatus: '',
  }

  playAgainButton = () => {
    this.setState({
      userChoice: {},
      randomChoice: {},
      renderGameResult: false,
      gameStatus: '',
    })
  }

  choiceButton = userChoiceDetails => {
    const {choicesList} = this.props
    const randomNumber = Math.ceil(Math.random() * 3) - 1
    const randomDetails = choicesList[randomNumber]

    const updatedRandomDetails = {
      randomChoiceId: randomDetails.id,
      randomChoiceImageUrl: randomDetails.imageUrl,
    }

    const {userChoiceId} = userChoiceDetails
    const {randomChoiceId} = updatedRandomDetails

    let gameFinalResult
    if (userChoiceId === randomChoiceId) {
      gameFinalResult = 'IT IS DRAW'
    } else if (userChoiceId === 'PAPER' && randomChoiceId === 'ROCK') {
      gameFinalResult = 'YOU WON'
    } else if (userChoiceId === 'SCISSORS' && randomChoiceId === 'ROCK') {
      gameFinalResult = 'YOU LOSE'
    } else if (userChoiceId === 'ROCK' && randomChoiceId === 'PAPER') {
      gameFinalResult = 'YOU LOSE'
    } else if (userChoiceId === 'SCISSORS' && randomChoiceId === 'PAPER') {
      gameFinalResult = 'YOU WON'
    } else if (userChoiceId === 'ROCK' && randomChoiceId === 'SCISSORS') {
      gameFinalResult = 'YOU WON'
    } else if (userChoiceId === 'PAPER' && randomChoiceId === 'SCISSORS') {
      gameFinalResult = 'YOU LOSE'
    }

    this.setState({
      gameStatus: gameFinalResult,
      userChoice: userChoiceDetails,
      randomChoice: updatedRandomDetails,
      renderGameResult: true,
    })

    if (gameFinalResult === 'YOU WON') {
      this.setState(prevState => ({
        totalScore: prevState.totalScore + 1,
      }))
    } else if (gameFinalResult === 'YOU LOSE') {
      this.setState(prevState => ({
        totalScore: prevState.totalScore - 1,
      }))
    }
  }

  renderGameResultView = () => {
    const {userChoice, randomChoice, gameStatus} = this.state
    const {userChoiceImageUrl} = userChoice
    const {randomChoiceImageUrl} = randomChoice

    return (
      <OutputContainer>
        <ResultContainer>
          <DetailsContainer>
            <Player> YOU </Player>
            <Image src={userChoiceImageUrl} alt="your choice" />
          </DetailsContainer>
          <DetailsContainer>
            <Player> OPPONENT </Player>
            <Image src={randomChoiceImageUrl} alt="opponent choice" />
          </DetailsContainer>
        </ResultContainer>
        <WinOrLoseContainer>
          <Result> {gameStatus} </Result>
          <PlayAgainButton onClick={this.playAgainButton}>
            PLAY AGAIN
          </PlayAgainButton>
        </WinOrLoseContainer>
      </OutputContainer>
    )
  }

  renderInitialGameView = () => {
    const {choicesList} = this.props
    return (
      <UnOrderListContainer>
        {choicesList.map(eachChoice => (
          <GameChoice
            key={eachChoice.id}
            eachChoice={eachChoice}
            choiceButton={this.choiceButton}
          />
        ))}
      </UnOrderListContainer>
    )
  }

  render() {
    const {totalScore, renderGameResult} = this.state

    return (
      <MainBgContainer>
        <GameHeader totalScore={totalScore} />
        {renderGameResult
          ? this.renderGameResultView()
          : this.renderInitialGameView()}
        <GameRules />
      </MainBgContainer>
    )
  }
}

export default RockPaperScissors
