import React from 'react'
import Sdata from '../components/Sdata'
import Card from '../components/Card'
import './Card.css'
import image1 from '../assets/techno.png'

const qualihead = {
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
}
const Services = (props) => {
    return ( <
        >
        <
        h1 style = { qualihead }
        className = "text-center" > { ' ' }
        Our services { ' ' } <
        /h1>{' '} {
            Sdata.map(function ncard(val) {
                return ( <
                    Card img = { val.img }
                    heading = { val.heading }
                    para = { val.para }
                    button = { val.button }
                    />
                )
            })
        } { ' ' } <
        />
    )
}
export default Services