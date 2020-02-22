import React from "react";

// reactstrap components
import { Button, Form, Input, Container, Row, Col } from "reactstrap";

function Contact() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("contact-page");
    };
  });
  return (
    <>
      <div className='main'>
        <div className='section section-gray'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto text-center' md='8'>
                <h2 className='title'>Get in touch with us</h2>
                <p>
                  Please reach out to us if you have any questions regarding how
                  to sign up, payment concerns, technology questions or just
                  general questions. We are here to help.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className='ml-auto mr-auto text-center' md='6'>
                <h3 className='title'>
                  <small>Find us on social networks</small>
                </h3>
                <Button className='btn-just-icon mr-1' color='twitter'>
                  <i className='fa fa-twitter' />
                </Button>
                <Button className='btn-just-icon mr-1' color='facebook'>
                  <i className='fa fa-facebook' />
                </Button>
                <Button className='btn-just-icon mr-1' color='google'>
                  <i className='fa fa-google' />
                </Button>
                <Button className='btn-just-icon mr-1' color='instagram'>
                  <i className='fa fa-instagram' />
                </Button>
                <Button className='btn-just-icon' color='youtube'>
                  <i className='fa fa-youtube' />
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className='ml-auto mr-auto text-center' md='6'>
                <h3 className='title'>
                  <small>Or drop us a note</small>
                </h3>
                <Form className='contact'>
                  <Row>
                    <Col md='6'>
                      <Input placeholder='First Name' type='text' />
                    </Col>
                    <Col md='6'>
                      <Input placeholder='Last Name' type='text' />
                    </Col>
                  </Row>
                  <Row>
                    <Col md='6'>
                      <Input placeholder='Email' type='text' />
                    </Col>
                    <Col md='6'>
                      <Input placeholder='Subject' type='text' />
                    </Col>
                  </Row>
                  <Input placeholder='Message' rows='7' type='textarea' />
                  <Row>
                    <Col className='ml-auto mr-auto' md='6'>
                      <Button block className='btn-round' color='danger'>
                        Send
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Contact;
