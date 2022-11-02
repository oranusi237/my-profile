import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
margin-bottom: 25px;
.bgImage{
    height: 250px;
    background-position: center;
    background-size: cover;
    object-fit: cover;
    width: 250px;
    border-radius: 25px;
    cursor: pointer;
}    
.life h2{
 font-weight: 600;
 font-family: 'Assistant', sans-serif;
}
`

function Projectitems({name, image, id}) {
 const navigate = useNavigate()
  return (
    <Container>
    <div className='life' onClick={() => {
      navigate('/project/' + id) 
    }}>
       <div style={{ backgroundImage: `url(${image})`}} className= 'bgImage'/>
       <h2> {name} </h2>
    </div>
    </Container>
  );
}

export default Projectitems