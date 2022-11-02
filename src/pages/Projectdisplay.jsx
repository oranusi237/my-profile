import { useParams } from 'react-router-dom'
import React from 'react'
import { projectList } from '../data/Projects'
import {BsGithub, BsGlobe} from 'react-icons/bs'
import styled from 'styled-components'

const Container = styled.div`
h1{
  text-align: center;
  padding: 100px 10%;
  color: #3e497a;
}
.grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
}

`


const Projectdisplay = () => {
    const {id} = useParams()
    const project = projectList[id]
  return (
    <Container>
        <h1>{project.name}</h1>
        <div className='grid'>
        <img src={project.image} alt='pic' style={{ height: 200, width: 200}}></img>
        <div className='ged'>
        <p>
            <b>Skills:</b>{project.skills}
        </p>
        <div className='icons'>
            <BsGithub />
            <BsGlobe />
            </div>
        </div>
        </div>
    </Container>
  )
}

export default Projectdisplay