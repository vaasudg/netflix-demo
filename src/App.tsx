import Banner from './Components/Banner/Banner'
import MovieList from './Pages/Home/Home'
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
