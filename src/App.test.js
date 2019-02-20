import React from 'react'
import { render } from 'react-testing-library'

import App from './App'

describe('App', () => {
  test('render correctly', () => {
    const { getByText } = render(<App />)

    expect(getByText(/hello/i)).toBeInTheDocument()
  })
})
