/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import logo from '../img/qx7jYSYm_400x400.jpg';
import Salutacio from './Salutacio.jsx';
class Header extends Component {
    render() {
        var usuari = "Oriol";
        return(
            <h1><img src={logo} height="50px" /> El teu portal de montanya. <Salutacio nick={usuari} /> </h1>
        )
    }
}
 export default Header;