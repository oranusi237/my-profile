import React from 'react'
import { Banner } from './Banner'
import Skills from './Skills'


const Home = () => {
  return (
    <div>
        <Banner>
            <h1>Hi, i am Samuel</h1>
            <p>I am a software developer with a passion for learning and creating.</p>
        </Banner>
        <Skills/>
    </div>
  )
}

export default Home