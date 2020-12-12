import React from 'react'
import { SingleField } from 'react-dynamic-fields'

const App = () => {
  const [options, setOptions] = React.useState([''])
  return (
    <SingleField
    //@ts-ignore
      options={options}
      //@ts-ignore
      setOptions={setOptions}
      label='Types of fruits'
    />
  )
}

export default App
