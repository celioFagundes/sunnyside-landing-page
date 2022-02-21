import React, { useState } from 'react'
import logo from '../public/logo.png'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='app'>
      <header className='header'>
        <div className='box-header container'>
          <figure className='logo'>
            <Image src={logo} alt='sunnyside' />
          </figure>
          <nav>
            <ul className={`links_list ${menuOpen && 'responsive'}`}>
              <li className='link'>
                <a href='#'>About</a>
              </li>
              <li className='link'>
                <a href='#'>Services</a>
              </li>
              <li className='link'>
                <a href='#'>Projects</a>
              </li>
              <li className='link'>
                <a href='#'>Contact</a>
              </li>
              
            </ul>
          </nav>
          <div className='menu_icon'>
            {menuOpen ? (
              <AiOutlineClose color='#fff' size={22} onClick={() => setMenuOpen(false)} />
            ) : (
              <FiMenu color='#fff' size={22} onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>
      </header>
      <main>
        <section className='introduction'>
          <div className='box-intro container'>
            <h1>We are creatives</h1>
            <Image src = '/images/icon-arrow-down.svg' alt ='arrow-down' height ={114} width = {36}/>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Index
