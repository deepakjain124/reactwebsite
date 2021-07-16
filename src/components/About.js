import React from "react";
import image from "../assets/black man.png";
import "./About.css";
import Qualification from "../components/Qualification";
import degree from "../components/Qdata";

const qualihead = {
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
}
const About = () => {
    return ( <
            >
            <
            section >
            <
            div className = "about" >
            <
            div className = "left_side" >
            <
            img src = { image }
            /> < /
            div >
            <
            div className = "right_side" >
            <
            h1 > welcome to About Page < br / > < span > Deeak jain < /span> < /
            h1 > <
            p > i am a b.tech student and studies in Mitrc collage < /p> <
            a href = "https://knowaboutme.netlify.app/" > visit website < /a> < /
            div > < /
            div > < /section>

            { /*qualification*/ }

            <
            section >

            <
            h1 style = { qualihead }
            className = "text-center m-5" > QUALIFICATION < /h1>  {
            degree.map(function ndeg(val) {
                return ( <
                    Qualification class = { val.class }
                    school = { val.school }
                    about = { val.about }
                    button = { val.button }
                    / > 
                );
            })
        } <
        /
    section > < / >
)
}
export default About;