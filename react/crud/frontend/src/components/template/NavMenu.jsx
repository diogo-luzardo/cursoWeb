import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <nav className="menu">
        <Link to={`${props.href}`}>
            <i className={`fa fa-${props.icon}`}></i>{props.option}
        </Link>
    </nav>