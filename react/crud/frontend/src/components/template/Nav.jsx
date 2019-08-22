import React from 'react'
import './Nav.css'
import 'font-awesome/css/font-awesome.min.css'
import Menu from './NavMenu'


export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Menu icon="home" option=" Início" href="home" />
            <Menu icon="users" option=" Usuários" href="users"/>
            <Menu icon="coffee" option=" Café" href="coffee" />
        </nav>
    </aside>