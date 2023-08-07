import { render } from '@testing-library/react'
import App from './App'

test('App component renders correctly', () => {
  const { getByTestId } = render(<App />)
  const bannerElement = getByTestId('banner')
  expect(bannerElement).toBeInTheDocument()
})

test('App component renders correctly', () => {
  const { asFragment } = render(<App />)
  expect(asFragment()).toMatchSnapshot()
})
