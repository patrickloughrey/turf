import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
// core components

function ColorNavbar({ auth: { isAuthenticated, loading }, logout }) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <>
      {bodyClick ? (
        <div
          id='bodyClick'
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        expand='lg'
        id='navbar-main'
      >
        <Container>
          <div className='navbar-translate'>
            <NavbarBrand id='navbar-brand' to='/' tag={Link}>
              Turf
            </NavbarBrand>
            <button
              className='navbar-toggler'
              id='navigation'
              type='button'
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className='navbar-toggler-bar bar1' />
              <span className='navbar-toggler-bar bar2' />
              <span className='navbar-toggler-bar bar3' />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className='ml-auto' navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className='mr-2' color='default' caret nav>
                  Hosts
                </DropdownToggle>
                <DropdownMenu className='dropdown-danger' right>
                  <DropdownItem to='/index' tag={Link}>
                    <i className='nc-icon nc-bullet-list-67' />
                    Features
                  </DropdownItem>
                  <DropdownItem to='/presentation' tag={Link}>
                    <i className='nc-icon nc-money-coins' />
                    Pricing
                  </DropdownItem>
                  <DropdownItem href='/' target='_blank'>
                    <i className='nc-icon nc-chat-33' />
                    Q&A
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className='mr-2' color='default' caret nav>
                  Teams
                </DropdownToggle>
                <DropdownMenu className='dropdown-danger' right>
                  <DropdownItem to='/sections#features' tag={Link}>
                    <i className='nc-icon nc-bullet-list-67' />
                    Features
                  </DropdownItem>
                  <DropdownItem to='/sections#teams' tag={Link}>
                    <i className='nc-icon nc-single-copy-04' />
                    Insurance
                  </DropdownItem>
                  <DropdownItem to='/sections#pricing' tag={Link}>
                    <i className='nc-icon nc-money-coins' />
                    Payments
                  </DropdownItem>
                  <DropdownItem to='/sections#testimonials' tag={Link}>
                    <i className='nc-icon nc-badge' />
                    Testimonials
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color='default' caret nav>
                  Company
                </DropdownToggle>
                <DropdownMenu className='dropdown-danger' right>
                  <DropdownItem to='/about-us' tag={Link}>
                    <i className='nc-icon nc-bank' />
                    About
                  </DropdownItem>
                  <DropdownItem to='/blog-posts' tag={Link}>
                    <i className='nc-icon nc-bullet-list-67' />
                    Blog
                  </DropdownItem>
                  <DropdownItem to='/contact-us' tag={Link}>
                    <i className='nc-icon nc-mobile' />
                    Contact
                  </DropdownItem>
                  <DropdownItem to='/discover' tag={Link}>
                    <i className='nc-icon nc-world-2' />
                    Team
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to='/choiceLogin'>
                  <Button
                    className='btn-round'
                    color='default'
                    size='lg'
                    target='_blank'
                  >
                    Login
                  </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/choice'>
                  <Button
                    className='btn-round'
                    color='danger'
                    size='lg'
                    target='_blank'
                  >
                    Sign Up
                  </Button>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

ColorNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(ColorNavbar);
