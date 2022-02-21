import React, { useEffect, useState } from 'react'
import logo from '../public/logo.png'
import { BsPinterest } from 'react-icons/bs'
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai'
import Image from 'next/image'
import useWindowDimensions from './api/useWindowsDimensions'

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [device, setDevice] = useState('desktop')
  const { width } = useWindowDimensions()

  useEffect(() => {
    if (width < 500 && device === 'desktop') {
      setDevice('mobile')
    }
    if (width > 500 && device === 'mobile') {
      setDevice('desktop')
    }
  }, [width])
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
              <AiOutlineMenu color='#fff' size={22} onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>
      </header>
      <main>
        <section className='introduction'>
          <div className='box-intro container'>
            <h1>We are creatives</h1>
            <Image src='/images/icon-arrow-down.svg' alt='arrow-down' height={114} width={36} />
          </div>
        </section>
        <section className='presentation'>
          <div className='row first-row'>
            <div className='row-item'>
              <h2>Transform your brand</h2>
              <p>
                We are a full-service creative agency specializing in helping brands grow fast.
                Engage your clients through compelling visuals that do most of the marketing for
                you.
              </p>
              <a href='/' className='learn-link yellow'>
                Learn more
              </a>
            </div>
            <figure className='row-img'>
              <Image
                src={`/images/${device}/image-transform.jpg`}
                alt='white egg on with a orange background'
                layout='fill'
              />
            </figure>
          </div>
          <div className='row'>
            <figure className='row-img'>
              <Image
                src={`/images/${device}/image-stand-out.jpg`}
                alt='white egg on with a orange background'
                layout='fill'
              />
            </figure>
            <div className='row-item'>
              <h2>Stand out to the right audience</h2>
              <p>
                Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.
              </p>
              <a href='/' className='learn-link red'>
                Learn more
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='row-item no-pad'>
              <div className='presentation-description graphic'>
                <h2>Graphic design</h2>
                <p>
                  Great design makes you memorable. We deliver artwork that underscores your brand
                  message and captures potential clients’ attention.
                </p>
              </div>
              <figure className='row-img'>
                <Image
                  src={`/images/${device}/image-graphic-design.jpg`}
                  alt='white egg on with a orange background'
                  layout='fill'
                />
              </figure>
            </div>
            <div className='row-item no-pad'>
              <div className='presentation-description photography'>
                <h2>Photography</h2>
                <p>
                  Increase your credibility by getting the most stunning, high-quality photos that
                  improve your business image.
                </p>
              </div>
              <figure className='row-img'>
                <Image
                  src={`/images/${device}/image-photography.jpg`}
                  alt='white egg on with a orange background'
                  layout='fill'
                />
              </figure>
            </div>
          </div>
        </section>
        <section className='testimonials'>
          <h3>Client Testimonials</h3>
          <div className='testimonials-box container'>
            <div className='testimonials-item'>
              <figure className='client-img'>
                <Image
                  src='/images/image-emily.jpg'
                  alt='white egg on with a orange background'
                  height={60}
                  width={60}
                />
              </figure>
              <p className='testimonial'>
                We put our trust in Sunnyside and they delivered, making sure our needs were met and
                deadlines were always hit.
              </p>
              <div className='client-description'>
                <p className='client-name'>Emily R.</p>
                <p className='client-role'>Marketing Director</p>
              </div>
            </div>
            <div className='testimonials-item'>
              <figure className='client-img'>
                <Image
                  src='/images/image-thomas.jpg'
                  alt='white egg on with a orange background'
                  height={60}
                  width={60}
                />
              </figure>
              <p className='testimonial'>
                Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made
                it a satisfying and enjoyable experience.
              </p>
              <div className='client-description'>
                <p className='client-name'>Thomas S.</p>
                <p className='client-role'>Chief Operating Officer</p>
              </div>
            </div>
            <div className='testimonials-item'>
              <figure className='client-img'>
                <Image
                  src='/images/image-jennie.jpg'
                  alt='white egg on with a orange background'
                  height={60}
                  width={60}
                />
              </figure>
              <p className='testimonial'>
                Incredible end result! Our sales increased over 400% when we worked with Sunnyside.
                Highly recommended!
              </p>
              <div className='client-description'>
                <p className='client-name'>Jennie F.</p>
                <p className='client-role'>Business Owner</p>
              </div>
            </div>
          </div>
        </section>
        <section className='gallery'>
          <figure className='gallery-img'>
            <Image
              src={`/images/${device}/image-gallery-milkbottles.jpg`}
              alt='white egg on with a orange background'
              layout='fill'
            />
          </figure>
          <figure className='gallery-img'>
            <Image
              src={`/images/${device}/image-gallery-orange.jpg`}
              alt='white egg on with a orange background'
              layout='fill'
            />
          </figure>
          <figure className='gallery-img'>
            <Image
              src={`/images/${device}/image-gallery-cone.jpg`}
              alt='white egg on with a orange background'
              layout='fill'
            />
          </figure>
          <figure className='gallery-img'>
            <Image
              src={`/images/${device}/image-gallery-sugar-cubes.jpg`}
              alt='white egg on with a orange background'
              layout='fill'
            />
          </figure>
        </section>
      </main>
      <footer>
        <h3>Sunnyside</h3>
        <nav>
          <ul>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Services</a>
            </li>
            <li>
              <a href='/'>Projects</a>
            </li>
          </ul>
        </nav>
        <div className='footer-social-medias'>
          <ul>
            <li>
              <a href='/'>
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href='/'>
                <AiOutlineInstagram />
              </a>
            </li>
            <li>
              <a href='/'>
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href='/'>
                <BsPinterest />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Index
