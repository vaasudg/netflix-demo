import React, {
  Dispatch,
  createContext,
  useReducer
  // useState
} from 'react'

type ScrollState = {
  scrollValue: number
}

type ScrollAction = {
  type: 'SET_SCROLL'
  payload: number
}

const initialScrollState: ScrollState = {
  scrollValue: 0
}

type EmployeeData = {
  name: string
  age: number
  role: string
}

// const initialEmployeeData = { name: 'John Doe', age: 30, role: 'Developer' }

const Contexts = createContext<{ state: ScrollState; dispatch: Dispatch<any>; employeeData?: EmployeeData }>({
  state: initialScrollState,
  // employeeData: initialEmployeeData,
  dispatch: () => null
})

const scrollReducer = (scrollValue: ScrollState, action: ScrollAction) => {
  switch (action.type) {
    case 'SET_SCROLL':
      return {
        ...scrollValue,
        scrollValue: action.payload
      }
    default:
      return scrollValue
  }
}

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollState, scrollDispatch] = useReducer(scrollReducer, initialScrollState)
  // const [employeeData, setEmployeeData] = useState(initialEmployeeData)
  return (
    <Contexts.Provider
      // value={{ state: scrollState, dispatch: scrollDispatch }}
      value={{
        state: scrollState,
        dispatch: scrollDispatch
        // employeeData
      }}
    >
      {children}
    </Contexts.Provider>
  )
}

export { Contexts as ScrollContext, Provider }
