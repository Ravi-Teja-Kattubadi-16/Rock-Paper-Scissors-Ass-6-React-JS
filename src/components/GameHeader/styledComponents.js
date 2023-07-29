import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #ffffff;
  height: 20vh;
  width: 90%;
  padding: 15px 35px 15px 35px;
  border-radius: 13px;
  @media screen and (min-width: 768px) {
    width: 60%;
    height: 25vh;
    padding: 14px 30px 14px 30px;
  }
`

export const HeadingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid yellow;
  margin: 0;
  width: 120px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`

export const ScoreBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  //   padding: 12px 25px 12px 25px;
  border-radius: 13px;
  width: 40%;
  border: 3px solid red;
  @media screen and (min-width: 768px) {
    // padding: 10px 5px 10px 5px;
    border-radius: 13px;
    width: 20%;
    height: 17vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 28px;
  color: #ffffff;
  margin: 0;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 27px;
  }
`

export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 28px;
  font-family: 'Bree Serif';
  margin: 0;
  padding: 0;
  @screen and (min-width:768px) {
    margin: 0;
    padding: 0;
    color: #223a5f;
    font-size: 28px;
    font-family: 'Bree Serif';
    border: 2px solid black;
  }
`
export const Score = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 56px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  @screen and (min-width:768px) {
    font-family: 'Roboto';
    font-size: 2px;
    margin: 0;
    padding: 0;
  }
`
