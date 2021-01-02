import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Input,
  AddIcon,
  DeleteIcon,
  FormsContainer,
  Select,
  Option
} from './Theme'

interface DataProps {
  name: string
  label: string
  types: string[]
}

interface OptionProps {
  category: string
}

interface Props {
  data: DataProps
  options: OptionProps[]
  setOptions: (x: any) => {} | void
  label?: string
  initialValue: OptionProps
}

export default function DoubleField({
  data,
  initialValue,
  options,
  setOptions
}: Props) {
  function handleRemoveField(index: number) {
    const values = options
    values.splice(index, 1)
    setOptions([...values])
  }

  function handleAddField() {
    setOptions([...options, initialValue])
  }
  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) {
    const newValue = { [event.target.name]: event.target.value }
    setOptions([
      ...options.slice(0, index),
      { ...options[index], ...newValue },
      ...options.slice(index + 1)
    ])
  }
  return (
    <React.Fragment>
      {options.map((_option: OptionProps, i: number) => (
        <div key={i}>
          <FormsContainer>
            <Select
              name='category'
              value={_option.category}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                handleChange(event, i)
              }
            >
              {data.types.map((type: string) => (
                <Option key={type} value={type}>
                  {type}
                </Option>
              ))}
            </Select>
            <Input
              placeholder={`Add ${data.label}`}
              value={options[i][data.name]}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(event, i)
              }
              name={data.name}
              data-testid='option_field'
              autoFocus
            />
            <Button data-testid='add_field' onClick={handleAddField}>
              <AddIcon />
            </Button>
            <Button
              data-testid='add_field'
              onClick={() => handleRemoveField(i)}
            >
              <DeleteIcon />
            </Button>
          </FormsContainer>
        </div>
      ))}
    </React.Fragment>
  )
}

const ValueType = {
  value: PropTypes.string,
  category: PropTypes.string
}

DoubleField.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({ ...ValueType })).isRequired,
  initialValue: PropTypes.shape({ ...ValueType })
}
