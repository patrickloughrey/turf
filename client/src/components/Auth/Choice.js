import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Choice() {
  return (
    <>
      <div className='section secion-blog cd-section' id='blogs'>
        <div className='blog-4'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' md='8'>
                <h2 className='title text-center'> Host or Team? </h2>
                <br />
              </Col>
            </Row>
            <Row>
              <Col md='6'>
                <Card className='card-plain card-blog text-center'>
                  <div className='card-image'>
                    <a href='' onClick={e => e.preventDefault()}>
                      <img
                        alt='...'
                        className='img img-raised'
                        src={require("../../assets/img/sections/tournament.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <b>
                      <h3 className='card-category text-danger'>Host</h3>
                    </b>
                    <CardTitle tag='h3'>
                      <a href='' onClick={e => e.preventDefault()}>
                        Begin by listing your fields
                      </a>
                    </CardTitle>
                    <p className='card-description'>
                      Build your Host profile and allow as many teams as
                      possible to locate your facility. Start making a larger
                      return from the usage of your fields. Worry less about
                      scheduling, we do that for you.
                    </p>
                    <br />
                    <Link to='/registerHost'>
                      <Button className='btn-round' color='danger'>
                        Register Now
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
              <Col md='6'>
                <Card className='card-plain card-blog text-center'>
                  <div className='card-image'>
                    <a href='' onClick={e => e.preventDefault()}>
                      <img
                        alt='...'
                        className='img img-raised'
                        src={require("../../assets/img/sections/team.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <b>
                      <h3 className='card-category text-warning'>Team</h3>
                    </b>
                    <CardTitle tag='h3'>
                      <a href='' onClick={e => e.preventDefault()}>
                        Start booking practices for your team
                      </a>
                    </CardTitle>
                    <p className='card-description'>
                      Sign your team up and start your season off the right way
                      by not worrying about finding fields. Spend time preparing
                      the details of your practice instead.
                    </p>
                    <br />
                    <Link to='/register'>
                      <Button className='btn-round' color='warning'>
                        Register Now
                      </Button>
                    </Link>
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

export default Choice;
