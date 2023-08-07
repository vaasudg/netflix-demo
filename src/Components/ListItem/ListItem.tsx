import { useContext, useEffect, useRef, useState } from 'react'
// import useLazyLoading from 'src/hooks/useLazyLoading'
import { DataResponseI, ResultItemI } from 'src/utils/interfaces/list.interface'
import LikeButton from '../common/buttons/LikeButton'
import './ListItem.css'
import { ScrollContext } from 'src/context/Context'

// const List = ({ result, id }: DataResponseI) => {
const List = ({ result, scrollValue, setScrollValue }: any) => {
  // const isImgloaded = useLazyLoading('.lazy')
  const [isImgloaded, setisImgLoaded] = useState(false)

  const observerRef = useRef<IntersectionObserver | null>(null)
  const { state } = useContext(ScrollContext)

  useEffect(() => {
    const lazyImages = document.querySelectorAll('.lazy')
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target as HTMLImageElement
            lazyImage.style.backgroundImage = `url(${lazyImage.dataset.src || ''})`
            observerRef.current?.unobserve(lazyImage)
            setisImgLoaded(true)
          }
        })
      },
      { rootMargin: '200px' }
    )

    lazyImages.forEach(lazyImage => {
      observerRef.current?.observe(lazyImage)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [result])

  return (
    <div className='lists__container'>
      <div className='lists' style={{ transform: `translate(-${scrollValue}px, 0)` }}>
        {result?.map((d: ResultItemI) => (
          <div key={d.id} className='list'>
            <div className='like__button-holder'>
              <LikeButton />
            </div>
            <div className={`image__holder lazy `} data-src={`https://v3img.voot.com/${d.imageUri}`} />
            <div className='list__title'>{d.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
