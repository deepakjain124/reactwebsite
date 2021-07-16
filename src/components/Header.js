import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const header = {
    fontweight: 'bold',
}

const Header = () => {
    return ( <
        >
        <
        nav class = "navbar navbar-expand-lg navbar-light bg-transparent" >
        <
        a class = "navbar-brand"
        href = "#" > { ' ' }
        WebDeepak { ' ' } <
        /a>{' '} <
        button class = "navbar-toggler"
        type = "button"
        data toggle = "collapse"
        data target = "#navbarNav"
        aria controls = "navbarNav"
        aria expanded = "false"
        aria label = "Toggle navigation" >
        <
        span class = "navbar-toggler-icon" > < /span>{' '} <
        /button>{' '} <
        div class = "collapse navbar-collapse"
        id = "navbarNav" >
        <
        ul class = "navbar-nav ml-auto" >
        <
        li class = "nav-item active" >
        <
        NavLink class = "nav-link"
        to = "/" > { ' ' }
        Home < span class = "sr-only" > (current) < /span>{' '} <
        /NavLink>{' '} <
        /li>{' '} <
        li class = "nav-item" >
        <
        NavLink class = "nav-link"
        to = "/services" > { ' ' }
        services { ' ' } <
        /NavLink>{' '} <
        /li>{' '} <
        li class = "nav-item" >
        <
        NavLink class = "nav-link"
        to = "/about" > { ' ' }
        About { ' ' } <
        /NavLink>{' '} <
        /li>{' '} <
        li class = "nav-item" >
        <
        NavLink class = "nav-link "
        to = "/contact" > { ' ' }
        Contact { ' ' } <
        /NavLink>{' '} <
        /li>{' '} <
        /ul>{' '} <
        /div>{' '} <
        /nav>{' '} <
        />
    )
}
export default Header

//     <
//     nav class = "navbar navbar-expand-lg navbar-light bg-transparent" >
//     <
//     a class = "navbar-brand ml-5"
// style = { header }
// href = "#" > { ' ' }
// WebDeepak { ' ' } <
// /a>{' '} <
// button class = "navbar-toggler"
// type = "button"
// datatoggle = "collapse"
// data target = "#navbarNav"
// ariacontrols = "navbarNav"
// aria expanded = "false"
// aria label = "Toggle navigation" >
//     <
//     span class = "navbar-toggler-icon" > < /span>{' '} < /
// button > { ' ' } <
//     div class = "collapse navbar-collapse"
// id = "navbarNav" >
//     <
//     ul class = "navbar-nav ml-auto" >
//     <
//     li class = "" >
//     <
//     NavLink class = "nav-link"
// to = "/" > { ' ' }
// Home { ' ' } <
// /NavLink>{' '} < /
// li > { ' ' } <
//     li class = "nav-item" >
//     <
//     NavLink class = "nav-link"
// to = "/Services" > { ' ' }
// Service { ' ' } <
// /NavLink>{' '} < /
// li > { ' ' } <
//     li class = "nav-item" >
//     <
//     NavLink class = "nav-link"
// to = "/about" > { ' ' }
// About { ' ' } <
// /NavLink>{' '} < /
// li > { ' ' } <
//     li class = "nav-item" >
//     <
//     NavLink class = "nav-link "
// to = "/contact" > { ' ' }
// Contact { ' ' } <
// /NavLink>{' '} < /
// li > { ' ' } <
//     /ul>{' '} < /
// div > { ' ' } <
//     /nav></NavLink >