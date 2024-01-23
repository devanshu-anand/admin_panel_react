import React from 'react'
import "./login.scss";
import Topbar from '../../components/Topbar/Topbar'
import adminPanelImg from './../../assets/img/admin_panel.jpg'

const Login = () => {
  return (
    <div className='login'>
      <Topbar />
      <div className='loginContainer'>
        <div className="loginCard">
          <img 
            src={adminPanelImg}
            alt="Admin Panel"
          />
          <h1>Admin Dashboard</h1>
          <form >
            <div className="formInput">
                <label for="">Username</label>
                <input type="text" required autofocus={true} />
            </div>
            <div className="formInput">
                <label for="">Password</label>
                <input type="password" required />
            </div>
            <div className="forgetLink">
                <label for="">Forget Password</label>
            </div>
            <button>Log in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login