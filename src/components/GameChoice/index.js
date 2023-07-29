import {ListItem, ChoiceButton, Image} from './styledComponents'

const GameChoice = props => {
  const {eachChoice, choiceButton} = props
  const {id, imageUrl, buttonId} = eachChoice
  const onClickChoiceButton = () => {
    const updatedChoice = {
      userChoiceId: id,
      userChoiceImageUrl: imageUrl,
    }
    choiceButton(updatedChoice)
  }
  return (
    <ListItem>
      <ChoiceButton
        type="button"
        value={imageUrl}
        onClick={onClickChoiceButton}
        data-testId={buttonId}
      >
        <Image src={imageUrl} alt={id} />
      </ChoiceButton>
    </ListItem>
  )
}

export default GameChoice

//   {
//     id: 'ROCK',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
//   },
