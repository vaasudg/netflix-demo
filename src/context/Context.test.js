import React from 'react'
import { render, act } from '@testing-library/react'
import { ScrollContext, Provider } from './Context'

describe('ScrollContext', () => {
  test('provides default scroll state and dispatch', () => {
    let scrollValue
    const { container } = render(
      <Provider>
        <ScrollContext.Consumer>
          {({ state, dispatch }) => {
            scrollValue = state.scrollValue
            return (
              <div>
                <span data-testid='scroll-value'>{state.scrollValue}</span>
                <button onClick={() => dispatch({ type: 'SET_SCROLL', payload: 100 })}>Set Scroll</button>
              </div>
            )
          }}
        </ScrollContext.Consumer>
      </Provider>
    )
    const scrollValueElement = container.querySelector('[data-testid="scroll-value"]')
    expect(scrollValueElement).toHaveTextContent('0')

    const setScrollButton = container.querySelector('button')
    expect(setScrollButton).toBeInTheDocument()

    act(() => {
      setScrollButton.click()
    })

    expect(scrollValueElement).toHaveTextContent('100')

    expect(scrollValueElement).toHaveTextContent(String(scrollValue))
  })
})
