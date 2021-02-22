import React from 'react'
import "./EmailList.css"
import Section from "./Section.js"
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PrintIcon from '@material-ui/icons/Print';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from "./EmailRow.js";


function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <IconButton><CheckBoxOutlineBlankIcon/></IconButton>
                    <IconButton><ArrowDropDownIcon/></IconButton>
                    <IconButton><RefreshIcon/></IconButton>
                    <IconButton><MoreVertIcon/></IconButton>
                </div>
                <div className="emailList__settingsRight">
                <IconButton><ChevronLeftIcon/></IconButton>
                    <IconButton><ChevronRightIcon/></IconButton>
                    <IconButton><PrintIcon/></IconButton>
                    <IconButton><SettingsIcon/></IconButton>
                </div>
               

            </div>
            <div className="emailList__section">
                        <Section Icon={InboxIcon} name="Primary" color="red" selected={true} />
                        <Section Icon={SupervisorAccountIcon} name="Social" color="blue" selected={false} />
                        <Section Icon={LocalOfferIcon} name="Promotions" color="green" selected={false} />
                </div>
                <div className="emailList__list">
                    <EmailRow  
                        title="Twitch"
                        subject="Hey !! mike"
                        description="This is test "
                        time="10pm"
                    />
                    <EmailRow  
                        title="Youtube"
                        subject="Hey !! mike"
                        description="This is another test of text overflow if happen then then the ellipse"
                        time="10pm"
                    />

                    
                    
                    
                </div>
        </div>
    )
}

export default EmailList
