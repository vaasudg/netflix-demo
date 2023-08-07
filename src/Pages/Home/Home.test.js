import React from 'react'
import { render } from '@testing-library/react'
import Home from './Home'

// eslint-disable-next-line react/prop-types
jest.mock('src/Components/List/List', () => ({ title, url }) => (
  <div data-testid='movie-list'>
    <h1>{title}</h1>
    <p>{url}</p>
  </div>
))
test('Home component renders correctly', () => {
  const { asFragment } = render(<Home />)
  expect(asFragment()).toMatchSnapshot()
})
