import React from 'react'
import './Card.css'

const width = {
    width: '25rem',
}
const img_w = {
    width: '100rem',
}
const Card = (props) => {
    return ( <
        >
        <
        div className = "cards" >
        <
        div class = "card ml-5"
        style = { width } >
        <
        img class = "card-img-top"
        src = { props.img }
        width = ""
        alt = "image is loading..." /
        >
        <
        div class = "card-body" >
        <
        h5 class = "card-title" > { props.heading } < /h5>{' '} <
        p class = "card-text mt-1" > { props.para } < /p>{' '} <
        a href = "#"
        class = "btn btn-primary" > { ' ' } { props.button } { ' ' } <
        /a>{' '} <
        /div>{' '} <
        /div>{' '} <
        /div>{' '} <
        />
    )
}
export default Card