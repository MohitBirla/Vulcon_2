import React from 'react'
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';

export default function Login() {
  return (
    <>
      <div className='main_login d-flex'>
        <div className='main-2'>
          <div>
            <h1>SIGN IN</h1>
            <p>Login to your account</p>
            <Button type='button' variant="contained" startIcon={<EmailIcon/>} className='login_btn mt-3'>LOGIN WITH EMAIL</Button>
            <p className='mt-3 fs-5' style={{}}>or</p>
            <Button type='button' variant="contained" startIcon={<EmailIcon/>} className='login_btn'>CONNECT WALLET</Button>
          </div>
            <img src='./images/vulcan_logo.png' className='mt-5'></img>
        </div>
        {/* <div className='main-3'>
          <h1>WELLCOME</h1>
          <p>TO WORD@META</p>
        </div> */}
      </div>
    </>
  )
}
