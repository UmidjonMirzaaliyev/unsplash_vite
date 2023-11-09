import ImagesResult from './components/ImagesResult'
import './App.css'
import Navbar from './components/Navbar'
import customFetch from './hooks/customFetch'
import { createContext } from 'react'

export const ImageContext = createContext()
function App() {
  const { response, isPending, error, fetchData } = customFetch(`search/photos?page=1&query=football&client_id=wCCjK7KHLhUXS5T93Izm0MYFNx0cBs5goaTKnAgm-p0`)

  const value = {
    response,
    isPending,
    error,
    fetchData
  }
  return (
    <ImageContext.Provider value={value}>
      <Navbar />
      <ImagesResult/>
    </ImageContext.Provider>
  )
}

export default App
