import React from 'react'
import "./new.scss"
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

const New = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>Add New User</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img 
              src="https://www.shutterstock.com/image-vector/camera-upload-icon-260nw-1055528567.jpg"
              alt="img"
            />
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label>Username</label>
                <input type="text" placeholder='john_doe' />
              </div>
              <div className='formInput'>
                <label>First Name Last Name</label>
                <input type="text" placeholder='john doe' />
              </div>
              <button>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New