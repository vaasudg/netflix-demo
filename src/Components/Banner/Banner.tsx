import './Banner.css'
const Banner = () => {
  return (
    <div
      className='banner'
      data-testid='banner'
      style={{
        backgroundImage: `url(
          'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701122086.jpg'
        )`
      }}
    >
      <h1 className='banner__title'>Now Streaming</h1>
      <div className='sub__title'>
        <h1>Interstellar</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Orci eu lobortis elementum nibh tellus molestie. Tempus quam pellentesque
        </p>
      </div>
      <button className='banner__play-button'>
        Watch now <span>▶</span>
      </button>
    </div>
  )
}

export default Banner
