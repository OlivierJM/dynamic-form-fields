import React from 'react'
import { SingleField, DoubleField } from 'react-dynamic-fields'

const App = () => {
  const nums = {
    value: '',
    category: ''
  }
  const [options, setOptions] = React.useState([''])
  const [numbers, setNumbers] = React.useState([nums])

  return (
    <React.Fragment>
      <SingleField
        //@ts-ignore
        options={options}
        //@ts-ignore
        setOptions={setOptions}
        label='Types of fruits'
      />

      <DoubleField
        //@ts-ignore
        options={numbers}
        //@ts-ignore
        setOptions={setNumbers}
        initialValue={nums}
        data={{
          label: 'Fruits',
          name: 'fruits',
          //@ts-ignore
          types: options
        }}
      />
    </React.Fragment>
  )
}

export default App
