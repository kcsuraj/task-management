import React, {
  createContext,
  Dispatch,
  FC,
  useReducer,
  ReactElement,
  useContext as useReactContext,
} from 'react'
import initialState, { IState } from './initialState'
import reducer from './reducer'

interface IContextProps {
  state: IState
  dispatch: Dispatch<any>
}

interface IProviderProps {
  children: ReactElement
}

const Context = createContext<IContextProps>({
  dispatch: () => {
    // Dispatch initial value
  },
  state: initialState,
})

const Provider: FC<IProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

const useContext = () => useReactContext(Context)

export { Provider, useContext }
