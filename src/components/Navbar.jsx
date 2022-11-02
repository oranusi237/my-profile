import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsLinkedin,BsTwitter,BsGithub } from "react-icons/bs";

const Container = styled.div`
header {
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items : center;
    padding: 0 6%;
    background: #21325E;
}
nav a{
    text-decoration: none;
    color: #fff;
    margin: 10px;
}
.icons span {
    color: #fff;
    margin: 5px;
    // height: 20px;
}
.logo{
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
}
`

const Navbar = () => {
  return (
    <Container>
        <header>
            <div> <span className='logo'>Samuel</span></div>
                <nav>
                    <span>
                        <Link to="/">Home</Link>
                    </span>
                    <span>
                        <Link to={'About'}>About</Link>
                    </span>
                    <span>
                        <Link to={"Experience"} >Experience</Link>
                    </span>
                    <span>
                        <Link to={"Projects"}>Projects</Link>
                    </span>
                    <span>
                        <Link to={"Contact"}>Contact</Link>
                    </span>
                </nav>
                <div className='icons'>
                    <span>
                        <BsTwitter size="1.5em" color=' #00acee'/>
                    </span>
                    <span>
                        <BsGithub size="1.5em" color='#171515'/>
                    </span>
                    <span>
                        <BsLinkedin size="1.5em" color=' #0072b1'/>
                    </span>
                </div>
        </header>
    </Container>
  )
}

export default Navbar