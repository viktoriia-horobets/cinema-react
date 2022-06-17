// import React from "react";
// import { Box, Container, Row, Column, FooterLink, Heading } from "./FooterStyles";

// const Footer = () => {
// return (
// 	<Box>
// 	<h3 style={{ color: "#41938D",
// 				textAlign: "center",
// 				marginTop: "-50px",
// 				marginBottom: "40px" }}>
// 		IMAX Corporation
// 	</h3>
// 	<Container>
// 		<Row>
// 		<Column>
// 			<Heading>Contact Us</Heading>
// 			<FooterLink href="#">Uttar Pradesh</FooterLink>
// 			<FooterLink href="#">Ahemdabad</FooterLink>
// 			<FooterLink href="#">Indore</FooterLink>
// 		</Column>
// 		<Column>
// 			<Heading>Social Media</Heading>
// 			<FooterLink href="#">
// 			<i className="fab fa-facebook-f">
// 				<span style={{ marginLeft: "10px" }}>
// 				Facebook
// 				</span>
// 			</i>
// 			</FooterLink>
// 			<FooterLink href="#">
// 			<i className="fab fa-instagram">
// 				<span style={{ marginLeft: "10px" }}>
// 				Instagram
// 				</span>
// 			</i>
// 			</FooterLink>
// 			<FooterLink href="#">
// 			<i className="fab fa-twitter">
// 				<span style={{ marginLeft: "10px" }}>
// 				Twitter
// 				</span>
// 			</i>
// 			</FooterLink>
// 		</Column>
// 		</Row>
// 	</Container>
// 	</Box>
// );
// };
// export default Footer;

import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './footer.css';

export default function App() {
  return (
    <MDBFooter className='bg-light text-center text-white'>
      <div className='container p-4 pb-0'>
        <section className='mb-4'>
			<h3 className='join-us'>Join us!</h3>
          <a
            className='btn btn-primary btn-floating m-1 icon__facebook'
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1 icon__twitter'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1 icon__google'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </a>
          <a
            className='btn btn-primary btn-floating m-1 icon__instagram'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1 icon__linkedin'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1 icon__github'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/viktoriia-horobets'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Ivano-Frankivsk: 
        <a className='text-white' href='https://nung.edu.ua/'>
          nung.edu.ua
        </a>
      </div>
    </MDBFooter>
  );
}