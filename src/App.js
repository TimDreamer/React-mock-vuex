import './App.css'
import { Store } from './store'
import People from './components/people'

function App() {
  return (
    <Store>
      <h1>Demo Store</h1>
      <People />
    </Store>
  )
}

export default App
