import React from 'react'
import "./page_list.scss";
import Topbar from '../../components/Topbar/Topbar'
import adminPanelImg from './../../assets/img/admin_panel.jpg'
import { Link } from 'react-router-dom';

const PageList = () => {
  return (
    <div className='login'>
      <Topbar />
      <div className='loginContainer'>
        <div className="loginCard">
          <img 
            src={adminPanelImg}
            alt="Admin Panel"
          />
          <h1>Admin Panel Pages</h1>
          <ul>
            <li>
                <Link to="/login" className="navLink">Login Page</Link>
            </li>
            <li>
                <Link to="/home" className="navLink">Admin Dashboard</Link>
            </li>
            <li>
                <Link to="/users/new" className="navLink">Add New User</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PageList