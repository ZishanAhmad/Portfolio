import { useEffect, useState } from 'react'
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return ()=>{setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)}
  }, [])

  return (
    <> 
      <div className='container skills-page'>
        <div className="text-zone">
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>I am well versed with competetive programming and practiced over 1000+ problems on codeforces,codechef,atcoder,etc.</p> 
          <p>I possess a strong command of frontend technologies such as HTML, CSS, JavaScript, and React.js, enabling me to create engaging and dynamic web experiences.</p>
          <p>I have a solid understanding of backend technologies, including Node.js, Express.js, and MongoDB, empowering me to develop robust and efficient server-side solutions for your web applications.</p>
          </div>
          <div className='skillset'>
            <div className='box'></div>
            <div>
               <div className="box"></div>
            </div>
          </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills;