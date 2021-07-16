import React from 'react'
import image1 from '../assets/techno.png'
import './Home.css'

const Home = () => {
    return ( <
        div className = "home" >
        <
        div className = "left_side" >
        <
        h1 > { ' ' }
        Grow your business with < br / > { ' ' } <
        span className = "tag" > WebDeepak < /span>{' '} <
        /h1>{' '} <
        p > We Are Team Of Talented developer Making Website < /p>{' '} <
        button > get started < /button>{' '} <
        /div> <
        div className = "right_side" >
        <
        img className = "image"
        src = { image1 }
        alt = "img"
        width = "300px" / >
        <
        /div>{' '} <
        /div>
    )
}
export default Home