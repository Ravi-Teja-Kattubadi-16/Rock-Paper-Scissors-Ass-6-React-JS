import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  border: 2px solid white;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 37%;
  }
`
export const ChoiceButton = styled.button`
  //   border: 2px solid yellow;
  background-color: transparent;
  margin: 12px;
  padding: 0;
  border-radius: 125px;
  //   width: 90%;
  text-align: center;
  @media screen and (min-width: 768px) {
    background-color: transparent;
    margin: 12px;
    padding: 0;
    border-radius: 125px;
    text-align: center;
  }
`

export const Image = styled.img`
  width: 110%;
  margin: -10px;
  @media screen and (min-width: 768px) {
    width: 130%;
    // border: 2px solid black;
    margin: -12px;
  }
`
