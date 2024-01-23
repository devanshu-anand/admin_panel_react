import React from 'react'
import "./sidebar.scss";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import LiquorRoundedIcon from '@mui/icons-material/LiquorRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import ElectricMopedRoundedIcon from '@mui/icons-material/ElectricMopedRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='logo'>Admin Panel</span>
        </div>
        <hr/ >
        <div className='center'>
            <ul>
                <p className='title'>MAIN</p>
                <li>
                    <DashboardRoundedIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className='title'>LISTS</p>
                <li>
                    <PersonOutlineRoundedIcon className='icon'/>
                    <span>Users</span>
                </li>
                <li>
                    <FastfoodRoundedIcon className='icon' />
                    <span>Products</span>
                </li>
                <li>
                    <ListAltRoundedIcon className='icon' />
                    <span>Orders</span>
                </li>
                <li>
                    <ElectricMopedRoundedIcon className='icon' />
                    <span>Delivery</span>
                </li>
                <p className='title'>USEFUL</p>
                <li>
                    <EqualizerRoundedIcon className='icon' />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveRoundedIcon className='icon' />
                    <span>Notifications</span>
                </li>
                <p className='title'>SERVICE</p>
                <li>
                    <LocalHospitalRoundedIcon className='icon' />
                    <span>System Health</span>
                </li>
                <li>
                    <EditNoteRoundedIcon className='icon' />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsRoundedIcon className='icon' />
                    <span>Settings</span>
                </li>
                <p className='title'>USER</p>
                <li>
                    <AccountBoxRoundedIcon className='icon' />
                    <span>Profile</span>
                </li>
                <li>
                    <PowerSettingsNewRoundedIcon className='icon' />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className='colorOption'></div>
            <div className='colorOption'></div>
        </div>

    </div>
  )
}

export default Sidebar