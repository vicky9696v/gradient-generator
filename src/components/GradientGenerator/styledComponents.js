import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: linear-gradient(${props => props.gradientValue});
  align-items: center;
  padding: 5%;
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 36px;
`
export const Para = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 22px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 10%;
  width: 40%;
  align-items: center;
  justify-content: space-between;
`

export const UnOrderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const ColorContainer = styled.div`
  height: 20%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FirstColorContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: black;
  font-size: 19px;
  font-weight: bold;
  height: 45px;
  width: 120px;
  border-radius: 7px;
  color: #014f7b;
  border: transparent;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
`
export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
