import styled from 'styled-components'

export const MainBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 120vh;
  width: 100%;
  background-color: #223a5f;
  border: 2px solid white;
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
    min-height: 120vh;
    justify-content: space-between;
  }
`

export const UnOrderListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  border: 2px solid white;
  padding: 0;
  margin: 0;
  @media screen and (min-width: 768px) {
    width: 30%;
    padding: 0;
    margin: 0;
  }
`
// Result CSS in JS
export const OutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid yellow;
  padding: 10px;
  width: 90%;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 43%;
  }
`
export const DetailsContainer = styled(ResultContainer)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
`
export const Image = styled.img`
  width: 95%;
  margin: 0;
  @media screen and (min-width: 768px) {
    width: 73%;
  }
`

export const Player = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  color: #ffffff;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const WinOrLoseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid yellow;
  //   padding: 30px;
`
export const Result = styled(Player)`
  font-size: 33px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const PlayAgainButton = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  padding: 12px 55px 12px 55px;
  font-family: 'Bree Serif';
  font-size: 17px;
  border: 0;
  border-radius: 11px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 12px 45px 12px 45px;
  }
`
