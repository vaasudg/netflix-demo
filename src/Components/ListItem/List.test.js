import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import MovieList from '../List/List'

jest.mock('src/hooks/useFetchImageData', () => {
  return jest.fn(() => ({
    result: [
      {
        id: 1,
        title: 'Kaalkoot',
        image: 'https://v3img.voot.com/v3Storage/assets/kaalkoot_launch_04-3x4-1691239727643.jpg'
      },
      {
        id: 2,
        title: 'One Friday Night',
        image: 'https://v3img.voot.com/v3Storage/assets/onf_launch_02-cta-3x4-1690479039729.jpg'
      },
      { id: 3, title: 'MTV Roadies', image: 'https://v3img.voot.com/v3Storage/assets/roadies-3x4-1691127858005.jpg' }
    ]
  }))
})

describe('MovieList component', () => {
  test('renders movie title and buttons correctly', () => {
    const title = 'AUGUST BINGELIST'
    const url =
      'https://content-jiovoot.voot.com/psapi/voot/v1/voot-web/content/specific/editorial?query=include%3A597caaf9395a58df620a60fb7b32cdfd&aspectRatio=3x4&responseType=common&page=1'

    render(<MovieList title={title} url={url} />)

    const movieTitleElement = screen.getByText(title)
    const prevButton = screen.getByRole('button', { name: /previous/i })
    const nextButton = screen.getByRole('button', { name: /next/i })

    expect(movieTitleElement).toBeInTheDocument()
    expect(prevButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  test('clicking on previous and next buttons changes the scroll value', () => {
    const title = 'POPULAR HOLLYWOOD SHOWS'
    const url =
      'https://content-jiovoot.voot.com/psapi/voot/v1/voot-web/content/specific/editorial?query=include%3A597caaf9395a58df620a60fb7b32cdfd&aspectRatio=3x4&responseType=common&page=1'
    render(<MovieList title={title} url={url} />)

    const prevButton = screen.getByRole('button', { name: /previous/i })
    const nextButton = screen.getByRole('button', { name: /next/i })

    fireEvent.click(prevButton)
    fireEvent.click(nextButton)
  })

  test('renders LikeButton correctly', () => {
    const { asFragment } = render(<MovieList />)
    expect(asFragment()).toMatchSnapshot()
  })
})
