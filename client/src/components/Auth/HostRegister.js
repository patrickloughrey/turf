import React, { useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { registerHost } from "../../actions/auth";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ColorNavbar from "../Navbars/ColorNavbar.js";

function HostRegister(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      props.setAlert("Passwords do not match", "danger");
    } else {
      props.registerHost({ name, email, password });
      console.log("Success");
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    document.body.classList.add("full-screen");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register-page");
      document.body.classList.remove("full-screen");
    };
  });

  // Redirect user if successful registration
  if (props.isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <ColorNavbar />
      <div className='wrapper'>
        <div
          className='page-header'
          style={{
            backgroundImage:
              "url(" + require("../../assets/img/sections/grass.jpg") + ")"
          }}
        >
          <div className='filter' />
          <br></br>
          <br></br>
          <Container>
            <Row>
              <Col className='ml-auto' lg='6' md='6' sm='7' xs='12'>
                <div className='info info-horizontal'>
                  <div className='icon'>
                    <i className='fa fa-umbrella' />
                  </div>
                  <div className='description'>
                    <h3>We've got you covered</h3>
                    <p>
                      Rain or shine, we have you covered no matter what. Smooth
                      cancellations on the not so sunny days.
                    </p>
                  </div>
                </div>
                <div className='info info-horizontal'>
                  <div className='icon'>
                    <i className='fa fa-map-signs' />
                  </div>
                  <div className='description'>
                    <h3>Clear Directions</h3>
                    <p>
                      Make sure your entire team gets to practice on time.
                      Parents will be emailed Google maps practice locations
                      immediately after booking confirmation.
                    </p>
                  </div>
                </div>
                <div className='info info-horizontal'>
                  <div className='icon'>
                    <i className='fa fa-user-secret' />
                  </div>
                  <div className='description'>
                    <h3>We value your privacy</h3>
                    <p>
                      All of your valuable data is encrypted when it is stored
                      on our servers. You can always trust where your data ends
                      up.
                    </p>
                  </div>
                </div>
              </Col>
              <Col className='mr-auto' lg='6' md='6' sm='5' xs='12'>
                <Card className='card-register'>
                  <CardTitle className='text-center' tag='h3'>
                    Register
                  </CardTitle>
                  <div className='social'>
                    <Button className='btn-just-icon mr-1' color='facebook'>
                      <i className='fa fa-facebook' />
                    </Button>
                    <Button className='btn-just-icon mr-1' color='google'>
                      <i className='fa fa-google' />
                    </Button>
                    <Button className='btn-just-icon' color='twitter'>
                      <i className='fa fa-twitter' />
                    </Button>
                  </div>
                  <div className='division'>
                    <div className='line l' />
                    <span>or</span>
                    <div className='line r' />
                  </div>
                  <Form className='register-form' onSubmit={e => onSubmit(e)}>
                    <Input
                      placeholder='Name'
                      name='name'
                      value={name}
                      onChange={e => onChange(e)}
                      type='text'
                      required
                    />
                    <Input
                      placeholder='Email'
                      name='email'
                      value={email}
                      onChange={e => onChange(e)}
                      type='email'
                      required
                    />
                    <Input
                      placeholder='Password'
                      name='password'
                      value={password}
                      onChange={e => onChange(e)}
                      type='password'
                      minLength='6'
                      required
                    />
                    <Input
                      placeholder='Confirm Password'
                      name='confirmPassword'
                      value={confirmPassword}
                      onChange={e => onChange(e)}
                      type='password'
                      minLength='6'
                      required
                    />
                    <Button block className='btn-round' color='default'>
                      Register
                    </Button>
                  </Form>
                  <div className='login'>
                    <Link to='/login'>
                      <p>
                        Already have an account? <b>Log in</b>.
                      </p>
                    </Link>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

HostRegister.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerHost: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, registerHost })(
  HostRegister
);
