import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
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

function SectionPricing() {
  const [activePill, setActivePill] = React.useState("1");
  // pills for the last pricing
  const [pillActive, setPillActive] = React.useState("personal");
  return (
    <>
      <div
        className='section section-pricing cd-section section-gray'
        id='pricing'
      >
        <div className='pricing-5 section-gray'>
          <Container>
            <Row>
              <Col md='4'>
                <h2 className='title'>
                  Choose a plan for the start of your season
                </h2>
                <div className='choose-plan'>
                  <Nav className='nav-pills-danger' pills role='tablist'>
                    <NavItem>
                      <NavLink
                        className={pillActive === "personal" ? "active" : ""}
                        href='#pablo'
                        onClick={e => {
                          e.preventDefault();
                          setPillActive("personal");
                        }}
                      >
                        Teams
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pillActive === "commercial" ? "active" : ""}
                        href='#pablo'
                        onClick={e => {
                          e.preventDefault();
                          setPillActive("commercial");
                        }}
                      >
                        Hosts
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <br />
                <p className='description text-gray'>
                  Try out our service for a month before you commit to any
                  pricing plan. If you have any questions along the way please
                  visit our contact page and send us your question right away!
                </p>
              </Col>
              <Col className='ml-auto' md='7'>
                <TabContent className='text-center' activeTab={pillActive}>
                  <TabPane tabId='personal'>
                    <div className='space-top' />
                    <Row>
                      <Col md='6'>
                        <Card className='card-pricing'>
                          <CardBody>
                            <h6 className='card-category text-default'>
                              Free Package
                            </h6>
                            <CardTitle tag='h1'>$0</CardTitle>
                            <ul>
                              <li>
                                <b>1</b> Month Trial
                              </li>
                              <li>
                                <b>10</b> Practices
                              </li>
                              <li>
                                <b>Upgrade</b> At Any Time
                              </li>
                              <li>
                                <b>Limited</b> Support
                              </li>
                            </ul>
                            <Button
                              className='btn-round'
                              color='default'
                              href='#pablo'
                              onClick={e => e.preventDefault()}
                            >
                              Learn More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md='6'>
                        <Card className='card-pricing' data-color='orange'>
                          <CardBody>
                            <h6 className='card-category text-success'>
                              Team Package
                            </h6>
                            <CardTitle tag='h1'>$99</CardTitle>
                            <ul>
                              <li>
                                <b>Monthly</b> Payment
                              </li>
                              <li>
                                <b>Unlimited</b> Practices
                              </li>
                              <li>
                                <b>Insurance</b> Functionality
                              </li>
                              <li>
                                <b>24 Hour</b> Support
                              </li>
                            </ul>
                            <Button
                              className='btn-neutral btn-round'
                              color='default'
                              href='#pablo'
                              onClick={e => e.preventDefault()}
                            >
                              Learn More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId='commercial'>
                    <div className='space-top' />
                    <Row>
                      <Col md='6'>
                        <Card className='card-pricing'>
                          <CardBody>
                            <h6 className='card-category text-default'>
                              Free Package
                            </h6>
                            <CardTitle tag='h1'>$0</CardTitle>
                            <ul>
                              <li>
                                <b>1</b> Month Trial
                              </li>
                              <li>
                                <b>Limited</b> Traffic
                              </li>
                              <li>
                                <b>Limited</b> Profile
                              </li>
                              <li>
                                <b>Limited</b> Support
                              </li>
                            </ul>
                            <Button
                              className='btn-round'
                              color='default'
                              href='#pablo'
                              onClick={e => e.preventDefault()}
                            >
                              Learn More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md='6'>
                        <Card className='card-pricing' data-color='orange'>
                          <CardBody>
                            <h6 className='card-category text-success'>
                              Host Package
                            </h6>
                            <CardTitle tag='h1'>$199</CardTitle>
                            <ul>
                              <li>
                                <b>Monthly</b> Payment
                              </li>
                              <li>
                                <b>Search</b> Engine Optimization
                              </li>
                              <li>
                                <b>Performance</b> Analytics
                              </li>
                              <li>
                                <b>Unlimited</b> Support
                              </li>
                            </ul>
                            <Button
                              className='btn-neutral btn-round'
                              color='default'
                              href='#pablo'
                              onClick={e => e.preventDefault()}
                            >
                              Learn More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionPricing;
