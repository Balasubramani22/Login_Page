import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'; 
import image1 from '../assets/Rectangle_1.png';
import image2 from '../assets/Group17550.svg';
import icon1 from '../assets/Path20.svg';
import icon2 from '../assets/1721615041620478926.svg';
import 'bootstrap/dist/css/bootstrap.css';

function TextControlsExample() {
  return (
    <Container className='Container_1 d-flex'>
        <div className='col_1'>
        <img src={image1} id='p_2'alt='icon' />
        </div>
        <div className='Form'>
        
    <Form>
    <img src={image2} id='p_1' alt='icon' />
        <h3 className='hd_3'>Cargo Management System</h3>
            <h1 className='hd__1'>Welcome</h1>
            <p id='pa_1'>Enter Your Email address and Password</p>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <div className='div_1'>
        <Form.Control type="email" placeholder="Email" id='email'/>
        <img src={icon2} id='key1' alt='icon' />
        </div>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <div className='div_2'>
        <Form.Control type="password" placeholder="Password" id='password'/>
        <img src={icon1} id='key2' alt='icon' />
        </div>
      </Form.Group>
    </Form>
    </div>
    </Container>
  );
}

export default TextControlsExample;