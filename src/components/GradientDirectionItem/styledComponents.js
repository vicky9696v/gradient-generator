import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
`

export const Button = styled.button`
  background-color: #ededed;

  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  font-size: 19px;
  font-weight: bold;
  height: 40px;
  width: 100px;
  border-radius: 7px;
  border: transparent;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
