import React from 'react'
import SingleField from './SingleField'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('SingleField', () => {
  it('it renders and updates correctly', () => {
    const updateMock = jest.fn()
    const options = ['', '', '']
    const container = render(
      <SingleField
        options={options}
        setOptions={updateMock}
        label='Types of fruits'
      />
    )
    expect(container.queryByText('Types of fruits')).toBeInTheDocument()
    expect(container.queryByText('Types of fruits')).not.toBeDisabled()
    expect(container.queryAllByText('remove')[0]).not.toBeDisabled()
    expect(container.queryAllByText('remove')).toHaveLength(3)
    expect(
      screen.getAllByPlaceholderText('type your Types of fruits')[0]
    ).toBeInTheDocument()
    expect(
      screen.getAllByPlaceholderText('type your Types of fruits')
    ).toHaveLength(3)

    expect(container.queryByTestId('add_field')).toHaveTextContent(
      'Types of fruits'
    )

    fireEvent.change(container.queryAllByTestId('option_field')[0], {
      target: { value: 'some value' }
    })
    expect(container.queryAllByTestId('option_field')[0].value).not.toBeNull()
    expect(updateMock).toBeCalled()
    fireEvent.click(container.queryAllByText('remove')[0])
    expect(updateMock).toBeCalled()
  })
})
