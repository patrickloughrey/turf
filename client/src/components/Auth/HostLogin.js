import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginHost } from "../../actions/auth";

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

function HostLogin(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    props.loginHost(email, password);
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("full-screen");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("full-screen");
    };
  });

  // Redirect user if logged in
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
              "url(" + require("../../assets/img/sections/rugby.jpg") + ")"
          }}
        >
          <div className='filter' />
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' lg='4' md='6' sm='6'>
                <Card className='card-register'>
                  <CardTitle tag='h3'>Log In</CardTitle>
                  <Form className='register-form' onSubmit={e => onSubmit(e)}>
                    <label>Email</label>
                    <Input
                      className='no-border'
                      placeholder='Email'
                      name='email'
                      value={email}
                      onChange={e => onChange(e)}
                      type='email'
                      required
                    />
                    <label>Password</label>
                    <Input
                      className='no-border'
                      placeholder='Password'
                      name='password'
                      value={password}
                      onChange={e => onChange(e)}
                      type='password'
                      minLength='6'
                      required
                    />
                    <Button block className='btn-round' color='danger'>
                      Log In
                    </Button>
                  </Form>
                  <div className='forgot'>
                    <Button
                      className='btn-link'
                      color='danger'
                      href='#pablo'
                      onClick={e => e.preventDefault()}
                    >
                      Forgot password?
                    </Button>
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

HostLogin.propTypes = {
  loginHost: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loginHost })(HostLogin);
