import React from "react"
// import Container from "react-bootstrap/Container"
// import Nav from "react-bootstrap/Navbar"


export default function Navbar(){
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container-fluid justify-content-center color-background-main p-3">
                <img src="./images/logo.png" alt="" className="p-3"/>
                <h1 className="fs-1">my travel journal.</h1>
            </div>
        </nav>
    )
}