import React from 'react'
import DoubleField from './DoubleField'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('DoubleField Component', () => {
  it('it renders and updates correctly', () => {
    const updateMock = jest.fn()
    const nums = [
      {
        value: '',
        category: ''
      },
      {
        value: '',
        category: ''
      }
    ]
    const options = ['ora', 'pui', 'somfer']
    const container = render(
      <DoubleField
        options={nums}
        setOptions={updateMock}
        initialValue={nums}
        data={{
          label: 'Fruits',
          name: 'fruits',
          types: options
        }}
      />
    )
    expect(container.queryByText('add Fruits')).toBeInTheDocument()
    expect(container.queryByText('add Fruits')).not.toBeDisabled()
    expect(container.queryAllByText('remove')[0]).not.toBeDisabled()
    expect(container.queryAllByText('remove')).toHaveLength(2)
    expect(
      screen.getAllByPlaceholderText('type your Fruits')[0]
    ).toBeInTheDocument()
    expect(screen.getAllByPlaceholderText('type your Fruits')).toHaveLength(2)

    expect(container.queryByTestId('add_field')).toHaveTextContent('add Fruits')

    fireEvent.change(container.queryAllByTestId('option_field')[0], {
      target: { value: 'some value' }
    })
    expect(container.queryAllByTestId('option_field')[0].value).not.toBeNull()
    expect(updateMock).toBeCalled()
    fireEvent.click(container.queryAllByText('remove')[0])
    expect(updateMock).toBeCalled()
  })
})
