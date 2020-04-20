import React, { Component } from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Kosovo from './photos/kosovo.png'

class Header extends Component {
    
    render() {
        return (
            <div>
                <header className="headeri1">
                    <img src={Kosovo} alt="Kosovo flag" className="logoks"/> <br />
                    <ul class="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="#"><i class="fas fa-home">
                            </i> Ballina</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i class="fa fa-car"></i> Statistika</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> 
                            <i class="fas fa-home"></i> Keshilla</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </header>
            </div>
        )
    }
}

export default Header;