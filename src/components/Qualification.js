import React from "react";
import "./qualification.css";


const Qualification = (props) => {
    return ( <
        div className = "qualification container-fluid" >
        <
        div className = "degree" >
        <
        h1 > { props.class } < /h1> < /
        div >
        <
        div className = "from" >
        <
        h3 className = "schoolname" > { props.school } < /h3> <
        p > { props.about } < /p> < /
        div > <
        /div>
    )
}
export default Qualification;