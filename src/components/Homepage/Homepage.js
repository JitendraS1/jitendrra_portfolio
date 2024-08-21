import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail
} from "react-icons/ai";


function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Jitendra Bhadoriya</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/JitendraS1");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("mailto:jitsingh182@hotmail.com");
            }}
              className='socailmediabtn'><AiFillMail className='icon' /></button>

            <button onClick={() => {
              window.open("https://twitter.com");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
            <button onClick={() => {
              window.open("https://instagram.com/");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default Home