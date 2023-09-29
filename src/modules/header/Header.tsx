import React from 'react'
import './header.scss'
import ButtonFilter from '../buttonFilter/ButtonFilter'

export default function Header() {
  return (
    <>
        <div className='header'>
          <div className='header_content'>
            Weather project
          </div>
          <div className='header_content'>
            <ButtonFilter/>   
          </div>
          <div className='header_content'>
            <ButtonFilter/>   
          </div>
        </div>
    </>
  )
}
