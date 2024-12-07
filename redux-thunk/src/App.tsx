import './App.css'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { incrementData } from './redux/helper'

function App() {
  const value = useAppSelector(state => state.count.value)
  const isLoading = useAppSelector(state => state.count.isLoading)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(incrementData())
  }

  return (
    <div>
      <h2>{isLoading ? 'Loading...' : value}</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App
