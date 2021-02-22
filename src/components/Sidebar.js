import React from 'react'
import "./Sidebar.css"
import {IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from "./SidebarOption.js";
import InboxIcon from '@material-ui/icons/Inbox';
import StarRateIcon from '@material-ui/icons/StarRate';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import CallIcon from '@material-ui/icons/Call';

function Sidebar({isOpen}) {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large"/>} className="sidebar__btn" onClick={()=>{
                isOpen(true);
                }}>
                Compose
            </Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" num="55" selected={true}/>
            <SidebarOption Icon={StarRateIcon} title="Starred" num="55" selected={false}/>
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" num="55" selected={false}/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" num="55" selected={false}/>
            <SidebarOption Icon={SendIcon} title="Send" num="55" selected={false}/>
            <SidebarOption Icon={DraftsIcon} title="Drafts" num="55" selected={false}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" num="55" selected={false}/>
            <div className="sidebar__footer">
                <IconButton><PersonIcon/></IconButton>
                <IconButton><DuoIcon/></IconButton>
                 <IconButton><CallIcon/></IconButton>
            </div>
        </div>
    )
}

export default Sidebar
