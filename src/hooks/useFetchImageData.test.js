import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import useFetchImageData from './useFetchImageData'

describe('useFetchImageData custom hook', () => {
  const fetchMock = jest.fn(() =>
    Promise.resolve({
      result: {
        totalAsset: 10,
        result: [
          {
            id: '3780287',
            name: 'Kaalkoot',
            imageUri: 'v3Storage/assets/kaalkoot_launch_04-3x4-1691239727643.jpg'
          },
          {
            id: '3500240',

            name: 'Asur',
            imageUri: 'v3Storage/assets/asur2-3x4-1689156335319.jpg'
          },
          {
            id: '3788394',
            name: 'One Friday Night',
            imageUri: 'v3Storage/assets/onf_launch_02-cta-3x4-1690479039729.jpg'
          }
        ],
        page: 1
      }
    })
  )

  test('fetches image data correctly', async () => {
    let result
    await act(async () => {
      result = renderHook(() => useFetchImageData(fetchMock))
    })
    await new Promise(resolve => setTimeout(resolve, 0))

    expect(fetchMock).toHaveBeenCalledTimes(1)
  })
})
