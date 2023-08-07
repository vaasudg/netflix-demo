import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {
  const [isPressed, setPressed] = useState(false)

  const handleClick = () => {
    setPressed(!isPressed)
  }

  return (
    <div className='like__button'>
      <i className={`icon ${isPressed ? 'press' : ''}`} onClick={handleClick}>
        ♥
      </i>
    </div>
  )
}

export default LikeButton
