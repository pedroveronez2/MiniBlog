import React from 'react'
// css
import styles from './About.module.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='text-center m-5'>
      <h1>Sobre o Mini <span>Blog</span></h1>
      <p>Este projeto conciste em um Blog feito em React no Front-end e Firebase no Back-end</p>
      <Link to="/posts/create" className='btn btn-success'>Criar Post</Link>
    </div>
    )
}

export default About