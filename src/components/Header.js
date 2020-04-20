import React, { Component } from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Kosovo from '../photos/kosovo.png'


class Header extends Component {
    
    render() {
        return (
            <div>
                <header className="headeri1">
                    <img src={Kosovo} alt="Kosovo flag" className="logoks"/> <br />
                    <ul class="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" 
                            onClick={this.props.handleNews} href="#">
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