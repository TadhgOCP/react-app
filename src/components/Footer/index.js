import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import './styles.scss'

export function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section
        id='footer-social-media'
        className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>My Stuff:</span>
          <span className='social-icon'><SocialIcon url="https://twitter.com/cyborgeyes" /></span>
          <span className='social-icon'><SocialIcon url="https://instagram.com/cyborgeyes" /></span>
          <span className='social-icon'><SocialIcon url="https://youtube.com/cyborgeyes" /></span>
          {<span className='social-icon'><SocialIcon url="https://twitch.tv/cyborgeyes" /></span>}
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright: Tadhg O'Connor
      </div>
    </MDBFooter>
  );
}
