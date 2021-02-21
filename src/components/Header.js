import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar,IconButton } from '@material-ui/core';
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search Gmail" type="text" />
                <ArrowDropDownIcon />
            </div>
            <div className="header__right">
                <IconButton><AppsIcon/></IconButton>
                <IconButton><NotificationsIcon /></IconButton>
                <IconButton><Avatar/></IconButton>
            </div>
    </div>
    )
}

export default Header
