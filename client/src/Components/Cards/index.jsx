import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './Cards.css'

const Card = ({id, name, attack, image, types}) => {
  return (

    <>
     <Link className='cardLink' to={`/pokemons/${id}`}>
    <div className='container'>
      <div className='box'>
        <div className='content'>
             <h2>{name}</h2>
              <div className="img_card">
                <img src={image} alt={name} />
              </div>
           <p>Tipe: {types}</p>
        </div>

      </div>

    <svg>
      <filter id='wavy'>
        <feTurbulence x='0' y='0' baseFrequency='0.02' 
        numOctaves='5' seed='2' >
          <animate attributeName='baseFrequency' dur='60s' values='0.02;0.05;0.02' repeatCount='indefinite' />
        </feTurbulence>
        <feDisplacementMap in='SourceGraphic' scale='30'></feDisplacementMap>
      </filter>
    </svg>
    </div>
    </Link>
    </>
  )
}

export default Card