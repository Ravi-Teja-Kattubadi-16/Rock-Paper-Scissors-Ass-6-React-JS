import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  PopUpContainer,
  RulesButton,
  ImageContainer,
  PopUpImage,
  CloseButton,
} from './styledComponents'
import 'reactjs-popup/dist/index.css'

const GameRules = () => (
  <PopUpContainer>
    <Popup
      trigger={<RulesButton type="button">RULES</RulesButton>}
      position="left top"
      arrow={false}
      modal
    >
      {close => (
        <ImageContainer>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </CloseButton>

          <PopUpImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </ImageContainer>
      )}
    </Popup>
  </PopUpContainer>
)
export default GameRules

// {close => (
//        <>
//          <div>
//            <p>React is a popular and widely used programming language</p>
//          </div>
//          <button
//            type="button"
//            className="trigger-button"
//            onClick={() => close()}
//          >
//            Close
//          </button>
//        </>
//      )}
