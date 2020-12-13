import React from 'react'

interface DataProps {
  name: string
  label: string
  types: [string]
}

interface OptionProps {
  category: string
}

interface Props {
  data: DataProps
  options: [OptionProps]
  setOptions: (x: any) => {}
  label: string
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
          <input
            placeholder={`type your ${data.label}`}
            value={options[i][data.name]}
            onChange={(event) => handleChange(event, i)}
            name={data.name}
            data-testid='option_field'
            autoFocus
          />
          <select
            name='category'
            value={_option.category}
            onChange={(event) => handleChange(event, i)}
          >
            {data.types.map((type: string) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <button onClick={() => handleRemoveField(i)}>remove</button>
        </div>
      ))}
      <button
        data-testid='add_field'
        onClick={handleAddField}
      >{`add ${data.label}`}</button>
    </React.Fragment>
  )
}
