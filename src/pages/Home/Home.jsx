import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Home = () => {
  const [query, setQuery] = useState('')
  const [posts] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <h1 className="my-5">Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="input-group">
          <input type="text" className="form-control" placeholder='Ou busque por tags' onChange={(e) => setQuery(e.target.value)} value={query}/>
          <button className="btn btn-primary">Pesquisar</button>
        </div>
      </form>
      <div>
        <h2 className="mb-3">Posts...</h2>
        {posts && posts.length === 0 && (
          <div className="my-5">
            <p>Não foram encontrados posts</p>
            <Link to={'/posts/create'} className="btn btn-primary">Criar primeiro post</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
