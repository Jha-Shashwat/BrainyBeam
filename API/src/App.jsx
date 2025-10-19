import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import ShowList from './components/ShowList'
import './App.css'

function App() {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchShows('batman')
  }, [])

  const fetchShows = async (query) => {
    if (!query.trim()) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch shows')
      }

      const data = await response.json()
      setShows(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    fetchShows(query)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>TV Show Finder</h1>
        <p>Search for your favorite TV shows</p>
      </header>

      <SearchBar onSearch={handleSearch} initialValue={searchQuery} />

      {loading && <div className="loading">Loading shows...</div>}
      
      {error && <div className="error">Error: {error}</div>}
      
      {!loading && !error && shows.length === 0 && (
        <div className="no-results">No shows found. Try another search!</div>
      )}
      
      {!loading && !error && shows.length > 0 && <ShowList shows={shows} />}
    </div>
  )
}

export default App