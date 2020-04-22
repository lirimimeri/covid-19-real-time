import React, { Component } from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Kosovo from '../photos/kosovo.png'


class Header extends Component {
    
    render() {
        return (
            <div>
                <header className="h">
                    <img src={Kosovo} alt="Kosovo flag" className="logoks"/> <br />
                    <ul class="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <i class="fas fa-home"></i> Ballina</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <i class="far fa-chart-bar"></i> Statistika</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> 
                            <i class="fas fa-comment-medical"></i>Keshilla</a>
                            
                        </li>
                    </ul>
                </header>
            </div>
        )
    }
}

export default Header;