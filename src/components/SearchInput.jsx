import { useContext, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { ImageContext } from '../App'
function SearchInput() {
  const [search, setSearch] = useState("")

  const {fetchData} = useContext(ImageContext)

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = () => {
    fetchData(`search/photos?page=1&query=${search}&client_id=wCCjK7KHLhUXS5T93Izm0MYFNx0cBs5goaTKnAgm-p0`)
    setSearch('')
  }

  const handleEnterSearch = (e) => {
    if (e.key === 'Enter') {
      fetchData(`search/photos?page=1&query=${search}&client_id=wCCjK7KHLhUXS5T93Izm0MYFNx0cBs5goaTKnAgm-p0`)
      setSearch('')
    }
  }
  return (
    <div className="flex gap-x-3 py-10 ml-80">
          <input
            type="search"
            className="bg-base-300 border  border-base-300 shadow-2xl text-sm  w-60 py-3 px-5 rounded-lg"
            placeholder="Search images..."
            value={search}
            onChange={handleInputChange}
            onKeyDown={handleEnterSearch}
            
          />
          <button onClick={handleSearch} disabled={!search} className="btn btn-primary"><BiSearchAlt className='text-lg'/>Search</button>
    </div>
  )
}

export default SearchInput