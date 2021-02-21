import React from 'react'
import "./SidebarOption.css"

function SidebarOption({Icon ,title, num}) {
    return (
        <div className="sidebarOption">
            <Icon />
            <h3>{title}</h3>
            <p>{num}</p>
        </div>
    )
}

export default SidebarOption
