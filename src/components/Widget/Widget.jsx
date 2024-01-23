import React from 'react'
import "./widget.scss";
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
const Widget = ({type}) => {
    let data;

    switch (type) {
        case "user":
                data={
                    title: "USERS",
                    isMoney: false,
                    link: "See all users",
                    icon: (
                        <PeopleAltRoundedIcon 
                            className='icon' 
                            style={{
                                color: "crimson",
                                backgroundColor: "rgba(255,0,0,0.2)"
                            }}
                        />
                    ),
                }
            break;
        case "order":
                data={
                    title: "ORDERS",
                    isMoney: false,
                    link: "View all orders",
                    icon: (
                        <LocalGroceryStoreRoundedIcon 
                            className='icon' 
                            style={{
                                backgroundColor: "rgba(218,165,32,0.2)",
                                color: "goldenrod"
                            }}
                        />
                    )
                }
            break;    
        case "earning":
                data={
                    title: "EARNINGS",
                    isMoney: true,
                    link: "View net earnings",
                    icon: (
                        <CurrencyRupeeRoundedIcon 
                            className='icon' 
                            style={{
                                backgroundColor: "rgba(0,128,0,0.2)",
                                color: "green"
                            }}
                        />
                    )
                }
            break;
        case "balance":
                data={
                    title: "BALANCES",
                    isMoney: true,
                    link: "See all details",
                    icon: (
                        <AccountBalanceRoundedIcon
                            className='icon'
                            style={{
                                backgroundColor: "rgba(128,0,128,0.2)",
                                color: "purple"
                            }}    
                        />
                    )
                }
            break;


        default:
            break;
    }


  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney ? "₹ 250" : 200}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            <div className='percentage positive'>
                <KeyboardArrowUpRoundedIcon />
                20%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget