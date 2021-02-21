import React from 'react'
import "./Section.css"

function Section({Icon,name,color,selected}) {
    return (
        <div className={`section ${selected && "section--selected"}`}
        style={{
            borderBottom: `3px solid ${color}`,
            color: `${selected && color}`,
        }}
        >
            
            <Icon />
            <h4>{name}</h4>
        </div>
    )
}

export default Section
