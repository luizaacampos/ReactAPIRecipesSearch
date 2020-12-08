import React, { useEffect, useState } from 'react'

import Recipe from './components/Recipe'
import './App.css';

const App = () => {

  const APP_ID = 'd29af11c'
  const APP_KEY = '53ec1e5fe96c126b4265ea51a0096fb7'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')
  
  useEffect(() => {
    getRecipes()

  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-btn" type="submit">Search</button>
      </form>
      <div className="recipe-container">
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          image={recipe.recipe.image} 
          ingredients={recipe.recipe.ingredients} 
        />
      ))}
      </div>
    </div>
  )
}

export default App;
