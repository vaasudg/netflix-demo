import React from 'react'
import { render } from '@testing-library/react'
import Banner from './Banner'

describe('Banner component', () => {
  test('renders banner title and sub title correctly', () => {
    const { getByText } = render(<Banner />)
    const bannerTitle = getByText('Now Streaming')
    const subTitle = getByText('Interstellar')
    expect(bannerTitle).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
  })

  test('renders play button correctly', () => {
    const { getByText } = render(<Banner />)
    const playButton = getByText('Watch now')
    expect(playButton).toBeInTheDocument()
  })

  test('renders banner correctly', () => {
    const { asFragment } = render(<Banner />)
    expect(asFragment()).toMatchSnapshot()
  })
})
