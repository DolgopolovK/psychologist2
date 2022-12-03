import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Анастасия",
      description: "Опыт 3 года",
      imgUrl: projImg1,
    },
    {
      title: "Анастасия",
      description: "Опыт 3 года",
      imgUrl: projImg1,
    },
    {
      title: "Анастасия",
      description: "Опыт 3 года",
      imgUrl: projImg1,
    },
    {
      title: "Анастасия",
      description: "Опыт 3 года",
      imgUrl: projImg1,
    },
    {
      title: "Анастасия",
      description: "Опыт 3 года",
      imgUrl: projImg1,
    },
    {
      title: "Анастасия",
      description: "Опыт 3 года",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Психологи</h2>
                <p>Представленые психологи подтвердили образование и прошли собеседование</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Представленые</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Представленые психологи подтвердили образование и прошли собеседование </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}
