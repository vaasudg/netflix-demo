import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LikeButton from './LikeButton'

describe('LikeButton component', () => {
  test('renders like button correctly', () => {
    const { getByText } = render(<LikeButton />)
    const likeButton = getByText('♥')
    expect(likeButton).toBeInTheDocument()
  })

  test('like button changes state when clicked', () => {
    const { getByText } = render(<LikeButton />)
    const likeButton = getByText('♥')
    fireEvent.click(likeButton)
    expect(likeButton).toHaveClass('press')
  })

  test('renders LikeButton correctly', () => {
    const { asFragment } = render(<LikeButton />)
    expect(asFragment()).toMatchSnapshot()
  })
})
