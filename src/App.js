import './App.css'
import { Store } from './store'
import People from './components/people'
import BadPeople from './components/BadPeople'

function App() {
  return (
    <Store>
      <h1>Demo Store</h1>
      <People />
      <BadPeople />
    </Store>
  )
}

export default App
