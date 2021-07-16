import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import { Route, Switch } from 'react-router-dom'

const App = () => {
    return ( <
        >
        <
        Header / >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Home }
        />{' '} <
        Route exact path = "/services"
        component = { Services }
        />{' '} <
        Route exact path = "/about"
        component = { About }
        />{' '} <
        Route exact path = "/contact"
        component = { Contact }
        /> <
        /Switch>{' '} <
        />
    )
}

export default App