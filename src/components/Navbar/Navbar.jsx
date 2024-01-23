import React from 'react'
import "./navbar.scss"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder='Search..' />
          <SearchRoundedIcon className='seachIcon'/>
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageRoundedIcon className='icon' />
            English
          </div>
          <div className='item'>
            <CommentRoundedIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <NotificationsRoundedIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <img src="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png" 
              alt="User Avatar Icon - Avatar Transparent User Icon Png, Png " 
              className='avatar'
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar