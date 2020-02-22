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

function ChoiceLogin() {
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
                        src={require("../../assets/img/sections/corner.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <b>
                      <h3 className='card-category text-danger'>Host Login</h3>
                    </b>
                    <br />
                    <Link to='/loginHost'>
                      <Button className='btn-round' color='danger'>
                        Login Now
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
                        src={require("../../assets/img/sections/balls.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <b>
                      <h3 className='card-category text-warning'>Team Login</h3>
                    </b>
                    <br />
                    <Link to='/login'>
                      <Button className='btn-round' color='warning'>
                        Login Now
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

export default ChoiceLogin;
