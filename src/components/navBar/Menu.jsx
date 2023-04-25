// import React from 'react';
// import SearchBar from '../searchbar/SearchBar.jsx'
// import style from './Navbar.module.css'
// import logo from '../navBar/Logo-rick-and-morty.png'
// import { NavLink } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';



// export default function Navbar(props){
//     return (
        
//         <div className={style.container}>
//             <SearchBar onSearch ={props.onSearch} removeAll={props.removeAll}/>
        
//         <div className={style.logo}>
//             <img src={logo} alt="" />
//         </div>

//         <div>
//             <div className={style.link} >
//             <ul >
//                 <li >
//                     <NavLink to= '/About'>About</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to= '/'>Home</NavLink>
//                 </li>
               
//             </ul>

            
//             </div>

//         </div>
        
//         </div>
        
        
//     )
// }


import React from "react";
import SearchBar from "../searchbar/SearchBar.jsx";
import logo from "../navBar/Logo-rick-and-morty.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "./Menu.module.css";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <Navbar className={style.container} expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/Favorites">Fovorites</Nav.Link>

          </Nav>
          <SearchBar onSearch={props.onSearch} removeAll={props.removeAll} logout={props.logout}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div className={style.container}>
    //   <SearchBar onSearch={props.onSearch} removeAll={props.removeAll} />
    //   <Button variant="primary">Primary</Button>
    //   <div className={style.logo}>
    //     <img src={logo} alt="" />
    //   </div>

    //   <div>
    //     <div className={style.link}>
    //       <ul className={style.ul}>
    //         <li>
    //           <NavLink to="/About">About</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/">Home</NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Menu;