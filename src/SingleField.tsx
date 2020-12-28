import * as React from 'react'
import PropTypes from 'prop-types'
import {Button, Input, AddIcon, DeleteIcon, FormsContainer} from './Theme'

interface Props {
  options: string[]
  setOptions: (x: any) => {} | void
  label: string
}

export default function SingleField({ options, setOptions, label }: Props) {
  function handleOptionChange(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const values = options
    values[index] = event.target.value
    setOptions([...values])
  }

  function handleAddOption() {
    setOptions([...options, ''])
  }

  function handleRemoveOption(index: number) {
    const values = options
    values.splice(index, 1)
    setOptions([...values])
  }

  return (
    <React.Fragment>
      {options.map((_option, i) => (
        <div key={i} className="forms-div">
          <FormsContainer>
          <Input
                  placeholder={`Add ${label}`}
                  value={options[i]}
                  onChange={(event) => handleOptionChange(event, i)}
                  data-testid='option_field'
                  autoFocus
                />
                <Button 
                  data-testid='add_field'
                  onClick={handleAddOption}>
                  <AddIcon/>
               </Button>
                <Button 
                  data-testid='add_field'
                  onClick={() => handleRemoveOption(i)}>
                  <DeleteIcon/>
                </Button>

          </FormsContainer>
               
        </div>
      ))}
    </React.Fragment>
  )
}

SingleField.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  setOptions: PropTypes.func.isRequired
}
