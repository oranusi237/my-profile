import React from 'react'
import Projectitems from '../components/Projectitems'
import styled from 'styled-components'
import { projectList } from '../data/Projects' 

const Container = styled.div`
 .project h1{
  color: #3e497a;
  margin: 30px;
  font-weight: 500;
  align-items: center;
  text-align: center;
}
.projectlist{
display: grid;
grid-template-columns: repeat(3, 1fr);
padding: 20px;
padding-left: 150px;

}
`

const Projects = () => {

  return (
    <Container>
   <div className='project'>
    <h1>My Personal Projects</h1>
    <div className='projectlist'>
        {projectList.map((project, index) => {
            console.log(project.image)
         return (
            <Projectitems id={index} name={project.name} image={project.image}/>
         ); 
        })}
    </div>
   </div>
    </Container>
  )
}

export default Projects