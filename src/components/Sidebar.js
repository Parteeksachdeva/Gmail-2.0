import React from 'react'
import "./Sidebar.css"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from "./SidebarOption.js"

function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large"/>} className="sidebar__btn"
            >
                Compose
            </Button>

            <SidebarOption Icon={AddIcon} title="Inbox" num="55"/>
        </div>
    )
}

export default Sidebar
