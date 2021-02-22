import { Checkbox } from '@material-ui/core';
import React from 'react'
import "./EmailRow.css";
import { IconButton, CheckBox} from '@material-ui/core';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from "react-router-dom";


function EmailRow({title,subject,description,time}) {
    const history = useHistory(); 
    return (
        <div onClick={()=>{history.push("/mail")}} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton><StarOutlineIcon/></IconButton>
                <IconButton><LabelImportantIcon/></IconButton>
            </div>
            <div className="emailRow__title">
                    <h2>{title}</h2>
            </div>
            <div className="emailRow__message">
                    <h3>
                    {subject}{" "}
                    <span className="emailRow__description">
                        -{description}
                    </span>
                    </h3>
            </div> 
            <p className="emailRow__time">
                    {time}
            </p>
        </div>
    )
}

export default EmailRow
