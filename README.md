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
import SingleField from 'react-dynamic-fields'

const App = () => {
  const [options, setOptions] = React.useState([''])
  return (
    <SingleField
      options={options}
      setOptions={setOptions}
      label='Types of fruits'
    />
  )
}
```

![demo](example/assets/dynamic_field.gif)

## License

MIT © [OlivierJM](https://github.com/OlivierJM)
