import people from './modules/people'
import products from './modules/products'
import { createContext, useContext, useReducer } from 'react'

const storeContext = createContext(null)

function CreateStore() {
  const [pp, setPp] = useReducer(people.reducer, people.state)
  const [pd, setPd] = useReducer(products.reducer, products.state)

  return {
    people: {
      state: pp,
      dispatch: setPp,
    },
    products: {
      state: pd,
      dispatch: setPd,
    },
  }
}

export function useStore() {
  const context = useContext(storeContext)
  return context
}

export function Store({ children }) {
  const store = CreateStore()
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}
