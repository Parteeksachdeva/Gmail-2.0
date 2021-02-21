import React from 'react'
import "./Mail.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function Mail() {
    const history = useHistory();
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__left">
                    <IconButton onClick={()=>{history.push("/")}}><ArrowBackIcon/></IconButton>
                    <IconButton><ArchiveIcon/></IconButton>
                    <IconButton><ReportIcon/></IconButton>
                    <IconButton><DeleteIcon/></IconButton>
                    <IconButton><MarkunreadIcon/></IconButton>
                    <IconButton><WatchLaterIcon/></IconButton>
                    <IconButton><CheckCircleIcon/></IconButton>
                    <IconButton><LabelImportantIcon/></IconButton>
                    <IconButton><MoreVertIcon/></IconButton>
                    
                </div>
                <div className="mail__right">
                <IconButton><UnfoldMoreIcon/></IconButton>
                <IconButton><PrintIcon/></IconButton>
                <IconButton><ExitToAppIcon/></IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>Subject</h2>
                    <LabelImportantIcon className="mail__important"/>
                    <p>Title</p>
                    <p>10pm</p>
                </div>
                <div className="mail__message">
                    <p>This is a message</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
