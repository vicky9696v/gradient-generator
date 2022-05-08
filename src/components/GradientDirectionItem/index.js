// Write your code here

import {ListItem, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, isActive, clickGradientDirectionItem} = props
  const {value, displayText} = details
  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListItem>
      <Button
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirectionItem}
      >
        {displayText}
      </Button>
    </ListItem>
  )
}

export default GradientDirectionItem
