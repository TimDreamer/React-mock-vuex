import people from './modules/people'
import products from './modules/products'
import { createContext, useContext, useReducer } from 'react'

const storeContext = createContext(null)

function dispatchWrapper(dispatch) {
  return new Proxy(
    {},
    {
      get(_, type) {
        return function (payload) {
          dispatch({
            type,
            payload,
          })
        }
      },
    }
  )
}

function CreateStore() {
  const [pp, setPp] = useReducer(people.reducer, people.state)
  const [pd, setPd] = useReducer(products.reducer, products.state)

  return {
    people: {
      state: pp,
      dispatch: dispatchWrapper(setPp),
    },
    products: {
      state: pd,
      dispatch: dispatchWrapper(setPd),
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
