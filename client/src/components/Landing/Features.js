/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Features() {
  const [activePill, setActivePill] = React.useState("1");
  return (
    <>
      <div
        className='section section-project cd-section section-dark'
        id='projects'
      >
        <div className='project-4 section section-dark'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto text-center' md='8'>
                <h2 className='title'>How It Works</h2>
                <h5 className='description'>
                  Sign your team up, set up your team's profile, and begin your
                  search for the best practice fields in your area.
                </h5>
                <br />
              </Col>
            </Row>
            <div className='space-top' />
            <div className='space-top' />
            <Row>
              <Col className='ml-auto' md='5'>
                <Card
                  data-background='image'
                  style={{
                    backgroundImage:
                      "url(" +
                      require("../../assets/img/sections/lawn.jpg") +
                      ")"
                  }}
                ></Card>
              </Col>
              <Col className='mr-auto' md='5'>
                <Card className='card-plain'>
                  <CardBody>
                    {/* <h6 className='card-category'>Technology</h6> */}
                    <a href='#pablo' onClick={e => e.preventDefault()}>
                      <CardTitle tag='h3'>Set up your team profile</CardTitle>
                    </a>
                    <p className='card-description'>
                      When creating the profile for your team, include
                      everything from the name of your team, the name of the
                      league you are in, all of your parents' contact
                      information, your practice and game schedule, and many
                      other details.
                    </p>
                    <CardFooter>
                      <Button
                        className='btn-neutral btn-round'
                        color='default'
                        href='#pablo'
                        onClick={e => e.preventDefault()}
                      >
                        Learn More
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <br />
            <hr />
            <br />
            <br />
            <Row>
              <Col className='ml-auto' md='5'>
                <Card className='card-plain'>
                  <CardBody>
                    {/* <h6 className='card-category'>Design</h6> */}
                    <a href='#pablo' onClick={e => e.preventDefault()}>
                      <CardTitle tag='h3'>Make payments directly</CardTitle>
                    </a>
                    <p className='card-description'>
                      Our technology integrates payment functionality directly
                      into the platform, so you no longer have to worry about
                      tracking down the mailing address of your practice
                      facility just to mail a check.
                    </p>
                    <CardFooter>
                      <Button
                        className='btn-neutral btn-round'
                        color='default'
                        href='#pablo'
                        onClick={e => e.preventDefault()}
                      >
                        Learn More
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className='mr-auto' md='5'>
                <Card
                  data-background='image'
                  style={{
                    backgroundImage:
                      "url(" +
                      require("../../assets/img/sections/rugby.jpg") +
                      ")"
                  }}
                ></Card>
              </Col>
            </Row>
            <br />
            <hr />
            <br />
            <br />
            <Row>
              <Col className='ml-auto' md='5'>
                <Card
                  data-background='image'
                  style={{
                    backgroundImage:
                      "url(" +
                      require("../../assets/img/sections/grass.jpg") +
                      ")"
                  }}
                ></Card>
              </Col>
              <Col className='mr-auto' md='5'>
                <Card className='card-plain'>
                  <CardBody>
                    {/* <h6 className='card-category'>Technology</h6> */}
                    <a href='#pablo' onClick={e => e.preventDefault()}>
                      <CardTitle tag='h3'>
                        Auto-generated email and calendar
                      </CardTitle>
                    </a>
                    <p className='card-description'>
                      Book and confirm your teams' practices for a given week
                      and our platform automatically sends email notifications
                      to every parent or guardian that you have listed in your
                      profile. The calendar is also updated in your teams'
                      profile page.
                    </p>
                    <CardFooter>
                      <Button
                        className='btn-neutral btn-round'
                        color='default'
                        href='#pablo'
                        onClick={e => e.preventDefault()}
                      >
                        Learn More
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Features;
