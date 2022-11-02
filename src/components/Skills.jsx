import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background: #fafafa;
color: #3e497a;
padding: 100px 10%;
.title{
    text-align: center;
    margin-bottom: 80px;
    font-size: 60px;
    font-weight: 600;
}
.front-end{
    margin-bottom: 30px;
}
.front-end h1{
    font-size: 45px;
    margin-bottom: 50px;
}
.back-end{
    margin-bottom: 30px;
}
.back-end h1{
    font-size: 45px;
    margin-bottom: 30px;
}
.Languagues h1{
    font-size: 45px;
    margin-bottom: 50px;
}
span{
    font-size: 25px;
    line-height: 40px;
}
`

const Skills = () => {
  return (
    <Container>
        <div>
            <h1 className='title'>Skills</h1>
            <div className='front-end'>
                <h1 >Front-End</h1>
                <span>
                    ReactJs, Angular, Redux, Html, Css, React Native, Flutter, Npm, Ionic, BootStrap, MaterialUi, Yarn, TailwindCss, StyledComponents
                </span>
            </div>
            <div className='back-end'>
                <h1 >Back-End</h1>
                <span>
                    Nodejs, Java Spring, .Net, ExpressJS, GraphQL, ApolloServer, MYSQL, MongoDB, DynamoDB, DigitalOcean, AWS, S3, SQL
                </span>
            </div>
            <div className='languagues'>
                <h1 >Languagues</h1>
                <span>
                    JavaScript, Java, Python, C#, C, C++, TypeScript, Go
                </span>
            </div>
        </div>
    </Container>
  )
}

export default Skills