import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  MainHeading,
  Para,
  ButtonsContainer,
  UnOrderList,
  ColorContainer,
  FirstColorContainer,
  GenerateButton,
  CustomInput,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onGenerate = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      fromColorInput,
      toColorInput,
      gradientValue,
      activeGradientDirection,
    } = this.state
    return (
      <MainContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <Para>Choose Direction</Para>
        <ButtonsContainer>
          <UnOrderList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                details={each}
                key={each.directionId}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
                isActive={activeGradientDirection === each.value}
              />
            ))}
          </UnOrderList>
        </ButtonsContainer>
        <Para>Pick the Colors</Para>
        <ColorContainer>
          <FirstColorContainer>
            <Para>{fromColorInput}</Para>
            <CustomInput
              onChange={this.onChangeFromColor}
              value={fromColorInput}
              type="color"
            />
          </FirstColorContainer>
          <FirstColorContainer>
            <Para>{toColorInput}</Para>
            <CustomInput
              onChange={this.onChangeToColor}
              value={toColorInput}
              type="color"
            />
          </FirstColorContainer>
        </ColorContainer>
        <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
