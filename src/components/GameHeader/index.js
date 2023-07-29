import {
  Header,
  HeadingsContainer,
  Heading,
  ScoreBoard,
  ScoreHeading,
  Score,
} from './styledComponents'

const GameHeader = props => {
  const {totalScore} = props
  return (
    <Header>
      <HeadingsContainer>
        <Heading> ROCK PAPER SCISSORS </Heading>
      </HeadingsContainer>
      <ScoreBoard>
        <ScoreHeading> Score </ScoreHeading>
        <Score> {totalScore} </Score>
      </ScoreBoard>
    </Header>
  )
}

export default GameHeader
