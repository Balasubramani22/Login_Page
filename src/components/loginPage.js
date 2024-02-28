import React from 'react'
import image1 from '../assets/Rectangle_1.png';
import image2 from '../assets/Group17550.svg';
import icon1 from '../assets/Path20.svg';
import icon2 from '../assets/1721615041620478926.svg';
export default function loginPage() {
  return (
    <div className='Container w-full aspect-auto'>
      <div className='col1'>
        <img src={image1} id='p2'alt='icon' />
      </div>
     
      <div className='from'>
      <img src={image2} id='p1' alt='icon' />
            <h3 className='hd3'>Cargo Management System</h3>
            <h1 className='hd1'>Welcome</h1>
            <p id='pa1'>Enter Your Email address and Password</p>
            <input type='email' placeholder='Email' id='email'></input><img src={icon2} id='key1' alt='icon'/><br/>
            <input type='password' placeholder='Password' id='pwd'></input><img src={icon1} id='key2' alt='icon' /><br/>
            <button className='Lg'>LOGIN</button>
        </div>
    </div>
  )
}
