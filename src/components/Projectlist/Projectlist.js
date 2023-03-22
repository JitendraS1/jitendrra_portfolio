import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import jsmartImage from '../../Assets/jsmart.png'
import movixImage from '../../Assets/movix.png'
import weatherImage from '../../Assets/weather.png'


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={jsmartImage}
                isBlog={false}
                title="Shopping App"
                description=" This E- commerce web site  using React Js & Redux Toolkit , i use fake api store API for fecthing data , for styling i used react styled component i also used setTimeout and clearTimeout method for Debuncing"
                ghLink="https://jsmart.netlify.app"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={movixImage}
                isBlog={false}
                title="Movix App"
                description="This project is a simplified front-end movie info app using OMDB api in React js where we can search movie by name and chack IMDB rating and other details about movie"
                ghLink="https://movixreactapp.netlify.app"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={weatherImage}
                isBlog={false}
                title="Weather App"
                description="This Project is very simplifide web page of a weather app where we can simply put a city name in input feild and jut hit sumit button to get city temperature in celsius"
                ghLink="https://jsweatherapp01.netlify.app"
              />
            </Col>


          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist