/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components

function FooterBlack() {
  return (
    <>
      <footer className='footer footer-black footer-white'>
        <Container>
          <Row>
            <nav className='footer-nav'>
              <ul>
                <li>
                  <a
                    href='https://www.creative-tim.com?ref=pkpr-black-footer'
                    target='_blank'
                    className='mr-1'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='http://blog.creative-tim.com/?ref=pkpr-black-footer'
                    target='_blank'
                    className='mr-1'
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.creative-tim.com/license?ref=pkpr-black-footer'
                    target='_blank'
                  >
                    Licenses
                  </a>
                </li>
              </ul>
            </nav>
            <div className='credits ml-auto'>
              <span className='copyright'>
                © Copyright {new Date().getFullYear()}
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
