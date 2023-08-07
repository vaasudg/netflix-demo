// import './MovieList.css'
import MovieList from 'src/Components/List/List'

const Home = () => {
  return (
    <div>
      <MovieList
        title={'August Bingelist'}
        url='https://content-jiovoot.voot.com/psapi/voot/v1/voot-web/content/specific/editorial?query=include%3A597caaf9395a58df620a60fb7b32cdfd&aspectRatio=3x4&responseType=common&page=1'
      />
      <MovieList
        title={'Popular Hollywood Shows'}
        url='https://content-jiovoot.voot.com/psapi/voot/v1/voot-web/content/specific/editorial-max?query=include%3A6e1f4dc17756cbb40125985a759ded8f&aspectRatio=3x4&responseType=common&page=1'
      />
      <MovieList
        title={'Most Watched Blockbusters'}
        url='https://content-jiovoot.voot.com/psapi/voot/v1/voot-web/content/specific/editorial-max?query=include%3Af7c8db1cf59ee51109cc958b7e934ac0&aspectRatio=3x4&responseType=common&page=1'
      />
      <MovieList
        title={'Explosive Action'}
        url='https://content-jiovoot.voot.com/psapi/voot/v1/voot-web/content/specific/editorial?query=include%3A47d014ca275d9c4242d7c44e635aa542&aspectRatio=3x4&responseType=common&page=1'
      />
      <MovieList
        title={'Comedy Shows'}
        url='https://content-jiovoot.voot.com/psapi/voot/v1/voot-web/content/specific/editorial?query=include%3Aad8c29fb62432d4ff69e3bf928665dc2&aspectRatio=3x4&responseType=common&page=1'
      />
      <MovieList
        title={'Mythology'}
        url='https://content-jiovoot.voot.com/psapi/voot/v1/voot-web/content/specific/editorial-clone?query=include%3Aaeaf8a166c6f5865823d8bfcc908fb42&aspectRatio=3x4&responseType=common&page=2'
      />
    </div>
  )
}

export default Home
