import React, { useState } from 'react'
import './contact.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
const qualihead = {
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
}

const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: '',
    })

    const inputEvent = (event) => {
        const { name, value } = event.target
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        alert(
            `My Name is ${data.fullname}.My phone number is ${data.phone} and my email id is ${data.email},Here is my message for you "${data.message}"`,
        )
    }
    return ( <
        > { ' ' } <
        div className = "contact" >
        <
        form className = "form"
        onSubmit = { formSubmit } >
        <
        label > name < /label> <br / > { ' ' } <
        TextField type = "text"
        name = "fullname"
        variant = "standard"
        style = {
            { width: '150%' } }
        value = { data.fullname }
        onChange = { inputEvent }
        label = "Name" >
        < /TextField>{' '} <
        br / >
        <
        label > phone < /label> <br / > { ' ' } <
        TextField type = "text"
        name = "phone"
        value = { data.phone }
        variant = "standard"
        style = {
            { width: '150%' } }
        onChange = { inputEvent }
        label = "Mobile No." >
        < /TextField>{' '} <
        br / >
        <
        label > email < /label> <br / > { ' ' } <
        TextField type = "text"
        name = "email"
        value = { data.email }
        variant = "standard"
        style = {
            { width: '150%' } }
        onChange = { inputEvent }
        label = "abcd123@gmail.com" >
        < /TextField>{' '} <
        br / >
        <
        label > message < /label> <br / > { ' ' } <
        TextField type = "message"
        name = "message"
        value = { data.message }
        variant = "standard"
        style = {
            { width: '150%' } }
        onChange = { inputEvent }
        label = "Message" >
        { ' ' } <
        /TextField>{' '} <
        br / >
        <
        Button color = "primary"
        variant = "contained"
        onclick = { Contact } > { ' ' }
        Send { ' ' } <
        /Button>{' '} <
        /form>{' '} <
        div className = "social" >
        <
        i class = "fas fa-id-card text-center" > < /i>{' '} <
        h6 className = "main" > Adderess: < /h6>{' '} <
        span > 165 scheme no 4 rajendra nagar alwar(Raj.) < /span>{' '} <
        h6 className = "main" > E - Mail: < /h6>{' '} <
        span > deepakjaindj052 @gmail.com < /span>{' '} <
        h6 className = "main" > Mobile No.: < /h6> <span> 8209086250 </span >
        <
        div className = "icons" >
        <
        a href = "https://www.instagram.com/" >
        <
        i class = " fb fab fa-facebook-f" > < /i>{' '} <
        /a>{' '} <
        a href = "https://www.facebook.com/profile.php?id=100011269636827" > { ' ' } <
        i class = "insta fab fa-instagram" > < /i>{' '} <
        /a>{' '} <
        a href = "https://www.linkedin.com/in/deepak-jain-998576181/" > { ' ' } <
        i class = " ln fab fa-linkedin" > < /i>{' '} <
        /a>{' '} <
        /div>{' '} <
        /div>{' '} <
        /div>{' '} <
        />
    )
}
export default Contact