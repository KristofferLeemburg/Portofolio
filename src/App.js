import React, {useEffect, useRef} from "react"
import "./App.scss";
import Header from "./components/Header"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {textIntro} from "./components/Animate"
import test from './test.mp4'
import {MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput}  from "mdbreact";
import { AiOutlineLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const App = () => 
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about-me" component={About} />
                <Route exact path="/contact-me" component={Contact} />
                <Route exact path="/portfolio" component={Portfolio} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>;
const About = () => <div><p>A web developer with a love for clean, functional code, relentless work ethic and an exceptional eye for detail. 
  Excellent knowledge of HTML, CSS (SASS). Basic knowledge of JavaScript, React.js, Python, and PHP.
  Comfortable working in the command line.
  Basic understanding how to use databases like mySQL.
  Prior experience as a Video artist.
  Proficient use of Adobe Photoshop and Adobe Illustrator.
  Intermediate knowledge of design principles.
  Functional knowledge of Git.
  Ability to apply feedback efficiently.
  Familiarity with project planning software (e.g. Github).
  Strong analytical problem-solving skills.
  Ability to communicate ideas clearly and professionally.</p>
  <img src={require('./images/profiel.jpeg')} alt="random1" className="profile" />
  </div>;
const Contact = () => <div className="contactform">

    <MDBContainer>
      <p className="text-center w-responsive mx-auto pb-5">
      Feel free to reach me.
      </p>
      <MDBRow>
        <MDBCol md="12" className="md-0 mb-5">
          <form action="./insert.php" method="POST" enctype="multipart/form-data" name="EmailForm">
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-name" label="Your name" name="username" required />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="contact-email"
                    label="Your email"
                    name="email"
                    required
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" label="Subject" name="subjec" required/>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="contact-message"
                    label="Your message"
                    name="messag"
                    required
                  />
                </div>
              </MDBCol>
            </MDBRow>
          <div className="text-center text-md-left">
            <MDBBtn color="primary" size="md" type="submit" value="Submit">
              Send
            </MDBBtn>
          </div>
          </form>
        </MDBCol>
        <MDBRow md="1" className="text-center w-responsive mx-auto pb-12">
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
              <p>Middenweg 103A 1462 HG Middenbeemster The Netherlands</p>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
              <p>+31 631947351 </p>
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="blue-text mt-6" />
              <p>kristofferleemburg@gmail.com</p>
            </li>
            <li>
            <a href="http://www.linkedin.com/in/kristoffer-leemburg/"><AiOutlineLinkedin  className="icon"/></a>
            <a href="https://github.com/KristofferLeemburg"><AiFillGithub className="icon"/></a>
            <a href="mailto:kristofferleemburg@gmail.com"><AiOutlineMail className="icon"/></a>
            
            </li>
          </ul>
        </MDBRow>
      </MDBRow>
    </MDBContainer></div>
const Portfolio = () =>
  <div className="container">
  <h1 className="portfolio-header">Random website generator.</h1>
  <p className="portfolio-p">A website created as a reaction to the small bubble created by big tech companies</p>
  </div>
const Home = () => {
  //Create a variable for dom nodes
  let intro = useRef(null)

  useEffect(() => {
    //animate text
    textIntro(intro)
  }, [])
  return (
    <div className="container">
      <video className="video" src={test} autoPlay muted loop></video>
      <div className="wrapper">
        <h5 className="intro" ref={(el) => (intro = el)}>
          {/* <b>Front End Developer</b> 
          <b className="intro2">Problem Solving Skills</b> 
          <b className="intro3">JavaScript</b> 
          <b className="intro4">HTML-CSS</b> 
          <b className="intro5">Responsive and Mobile Design</b> 
          <b className="intro6">Experience with CSS Preprocessors</b>
          <b className="intro7">Front End Frameworks</b> */}
        </h5>
      </div>
      </div>);}
export default App;
