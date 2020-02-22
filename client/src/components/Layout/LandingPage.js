import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ColorNavbar from "../Navbars/ColorNavbar.js";
import LandingPageHeader from "../Headers/LandingPageHeader.js";
import Features from "../Landing/Features.js";
import SectionPricing from "../Landing/Pricing.js";
import Contact from "../Landing/Contact.js";
import FooterBlack from "../Footers/FooterBlack.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ColorNavbar />
      <LandingPageHeader />
      <div className='wrapper'>
        <div className='section text-center landing-section'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' md='8'>
                <b></b>
                <h2 className='title'>List your field</h2>
                <h5>
                  Set up your Host account and customize your school, field, or
                  facilities' profile. Include details about your field
                  including hours of operation, photos, manager information,
                  etc. When teams' view your profile, they have access to your
                  calendar and can book a practice right then and there.
                </h5>
                <br />
                <Button
                  className='btn-fill btn-round'
                  color='danger'
                  href='#pablo'
                  onClick={e => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md='3'>
                <div className='info'>
                  <div className='icon icon-danger'>
                    <i className='nc-icon nc-image' />
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Upload Photos</h4>
                    <p className='description'>
                      Upload all of your field's photos directly to your
                      profile. Arrange them exactly the way you want to.
                    </p>
                    <Button
                      className='btn-link'
                      color='danger'
                      href='#pablo'
                      onClick={e => e.preventDefault()}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md='3'>
                <div className='info'>
                  <div className='icon icon-danger'>
                    <i className='nc-icon nc-chat-33' />
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Live Chat</h4>
                    <p>
                      Having trouble with an aspect of your profile? Send us a
                      message and we can help you immediately.
                    </p>
                    <Button
                      className='btn-link'
                      color='danger'
                      href='#pablo'
                      onClick={e => e.preventDefault()}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md='3'>
                <div className='info'>
                  <div className='icon icon-danger'>
                    <i className='nc-icon nc-chart-bar-32' />
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Performance</h4>
                    <p>
                      Get access to performance analytics to see exactly how
                      users are interacting with your profile. We also provide
                      tips to achieve better turn over.
                    </p>
                    <Button
                      className='btn-link'
                      color='danger'
                      href='#pablo'
                      onClick={e => e.preventDefault()}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md='3'>
                <div className='info'>
                  <div className='icon icon-danger'>
                    <i className='nc-icon nc-calendar-60' />
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Calendar</h4>
                    <p>
                      Upload your fields' availability once and we automatically
                      update your calendar in your profile when a team books a
                      practice.
                    </p>
                    <Button
                      className='btn-link'
                      color='danger'
                      href='#pablo'
                      onClick={e => e.preventDefault()}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Features />
        <SectionPricing />
        <Contact />
        {/* <div className='section landing-section'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' md='8'>
                <h2 className='text-center'>Have Questions For Us?</h2>
                <Form className='contact-form'>
                  <Row>
                    <Col md='6'>
                      <label>Name</label>
                      <Input placeholder='Name' />
                    </Col>
                    <Col md='6'>
                      <label>Email</label>
                      <Input placeholder='Email' />
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder='Ask us anything...'
                    type='textarea'
                    rows='4'
                  />
                  <Row>
                    <Col className='offset-md-4' md='4'>
                      <Button className='btn-fill' color='danger' size='lg'>
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div> */}
      </div>
      <FooterBlack />
    </>
  );
}

export default LandingPage;
