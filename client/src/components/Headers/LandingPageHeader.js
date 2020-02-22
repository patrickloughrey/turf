import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  UncontrolledCollapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className='page-header'
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/football.jpg") + ")"
        }}
      >
        <div className='filter' />
        <div className='content-center'>
          <Container>
            <div className='motto'>
              <Col className='ml-auto mr-auto' md='8'>
                <h1 className='title'>Find Your Field</h1>
                <h5 className='description'>
                  Search through hundreds of fields, gyms, and practice
                  facilities. Find the one you like and book it. Save the fields
                  that you love as a favorite so you have easy access to them.
                </h5>
                <br />
              </Col>
              <br />
              <Col className='ml-auto mr-auto' md='10'>
                <Card className='card-raised card-form-horizontal no-transition'>
                  <CardBody>
                    <Form action='' method=''>
                      <Row>
                        <Col md='3'>
                          <FormGroup>
                            <Input
                              defaultValue=''
                              placeholder='City'
                              type='text'
                            />
                          </FormGroup>
                        </Col>
                        <Col md='3'>
                          <FormGroup>
                            <Input
                              defaultValue=''
                              placeholder='State'
                              type='text'
                            />
                          </FormGroup>
                        </Col>
                        <Col md='3'>
                          <FormGroup>
                            <Input
                              defaultValue=''
                              placeholder='Date'
                              type='text'
                            />
                          </FormGroup>
                        </Col>
                        <Col md='3'>
                          <Button block color='danger' type='button'>
                            <i className='nc-icon nc-zoom-split' /> Search
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
