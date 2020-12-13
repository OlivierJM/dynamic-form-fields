import * as React from 'react'

interface Props {
  options: [string]
  setOptions: (x: any) => {}
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
        <div key={i}>
          <input
            placeholder={`type your ${label}`}
            value={options[i]}
            onChange={(event) => handleOptionChange(event, i)}
            data-testid='option_field'
            autoFocus
          />
          <button onClick={() => handleRemoveOption(i)}>remove</button>
        </div>
      ))}
      <button
        data-testid='add_field'
        onClick={handleAddOption}
      >{`add ${label}`}</button>
    </React.Fragment>
  )
}
