# react-dynamic-fields

> A package to make it easy to auto add fields in react and collect the data

[![NPM](https://img.shields.io/npm/v/react-dynamic-fields.svg)](https://www.npmjs.com/package/react-dynamic-fields) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-dynamic-fields
```

## Usage

```tsx
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
        options={options}
        setOptions={setOptions}
        label='Types of fruits'
      />

      <DoubleField
        options={numbers}
        setOptions={setNumbers}
        initialValue={nums}
        data={{
          label: 'Fruits',
          name: 'fruits',
          types: options
        }}
      />
    </React.Fragment>
  )
}
```
Single Option demo   

![demo](example/assets/dynamic_field.gif)

Single and Double Field Options demo   

![demo](example/assets/dynamic_field2.gif)

## License

MIT © [OlivierJM](https://github.com/OlivierJM)
