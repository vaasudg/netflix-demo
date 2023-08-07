import { Fragment, useCallback, useContext, useState } from 'react'
import List from 'src/Components/ListItem/ListItem'
import { ScrollContext } from 'src/context/Context'
import useFetchImageData from 'src/hooks/useFetchImageData'
import { DataResponseI } from 'src/utils/interfaces/list.interface'
import './List.css'

const MovieList = ({ url, title }: any) => {
  const { state, dispatch } = useContext(ScrollContext)
  const [scrollValue, setScrollValue] = useState(state.scrollValue)

  const fetchImageData = useCallback(async () => {
    const resp = await fetch(url)
    const data = await resp.json()
    return data
  }, [url])

  const imageData: DataResponseI | any = useFetchImageData(fetchImageData)

  const onPrevSlide = async () => {
    if (scrollValue > 0) {
      setScrollValue(prevScrollValue => prevScrollValue - 350)
    }
  }

  const onNextSlide = async () => {
    const element = document.querySelector('.lists') as HTMLElement
    if (element.clientWidth > scrollValue) {
      setScrollValue(prevScrollValue => prevScrollValue + 350)
      dispatch({ type: 'SET_SCROLL', payload: state.scrollValue + 350 })
    }
  }

  return (
    <>
      <h1 className='movie__title'>{title}</h1>
      <div className='movie__app'>
        {/* Previous arrow */}
        <button onClick={onPrevSlide} className='nav__button prev' aria-label='previous'>
          &#8249;
        </button>
        {/* Main List */}

        <List result={imageData?.result} scrollValue={scrollValue} setScrollValue={setScrollValue} />
        {/* Next arrow */}
        <button onClick={onNextSlide} className='nav__button next' aria-label='next'>
          &#8250;
        </button>
      </div>
    </>
  )
}

export default MovieList
