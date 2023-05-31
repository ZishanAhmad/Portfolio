import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters' 
import './index.scss'
import Logo from './Homeimg' 
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ','Z', 'i', 's', 'h', 'a', 'n',' ','A', 'h', 'm', 'a', 'd',',']
  const jobArray = [
    'c',
    'o',
    'd',
    'i',
    'n',
    'g',
    ' ',
    'e',
    'n',
    't',
    'h',
    'u',
    's',
    'i',
    'a',
    's',
    't',
    '.',
  ]

  useEffect(() => {
    return ()=>{setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)}
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
          </h1>
          <h2>Competetive Programmer / Web Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div> 
        <Logo className='logo-container'/>
      </div> 
      <Loader type="pacman" />
    </>
  )
}

export default Home