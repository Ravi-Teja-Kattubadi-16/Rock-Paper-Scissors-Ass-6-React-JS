import styled from 'styled-components'

export const RulesButton = styled.button`
  font-size: 17px;
  font-weight: 500;
  font-family: 'Bree Serif';
  color: white;
  padding: 11px 22px 11px 22px;
  color: #223a5f;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 10px 20px 10px 20px;
    margin: 8px;
  }
`

export const PopUpContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const ImageContainer = styled(PopUpContainer)`
  height: 28vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid red;
  margin: 0;
  @media screen and (min-width: 768px) {
    height: 78vh;
    width: 100%;
  }
`

export const PopUpImage = styled.img`
  width: 100%;
  border: 4px solid black;
  //   padding: 0px 10px 0px 10px;
  align-self: flex-end;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    border: 4px solid black;
    padding: 0px 80px 5px 80px;
    align-self: flex-end;
  }
`

export const CloseButton = styled.button`
  align-self: flex-end;
  border: 2px solid black;
  padding: 10px 10px 5px 10px;
  font-size: 15px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
