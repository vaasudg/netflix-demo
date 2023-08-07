import Banner from './Components/Banner/Banner'
import MovieList from './Pages/MovieList/Home'
import { Provider } from './context/Context'

function App() {
  return (
    <Provider>
      <Banner />
      <MovieList />
    </Provider>
  )
}

export default App
