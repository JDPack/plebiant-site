import React, { Component } from 'react';
import config from '../../config';
import Scroll from './Scroll';

import PSLogo from '../assets/images/plebiantstudios_logo.png'
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img src={PSLogo} height={64}/>
          </a>
          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? '' : 'collapsed'
            }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars mx-1"></i>
          </button>

          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Scroll
                onClick={_ => this.toggleMenu(!openMenu)}
                type="id"
                element="home"
              >
                <a className="nav-link" href="#home">
                  Home
                </a>
              </Scroll>
            </li>
            <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="about"
                >
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="team"
                >
                  <a className="nav-link" href="#team">
                    Team
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="games"
                >
                  <a className="nav-link" href="#games">
                    Games
                  </a>
                </Scroll>
              </li>
              {/* <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="features"
                >
                  <a className="nav-link" href="#features">
                    Features
                  </a>
                </Scroll>
              </li> */}
              {/* <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="contact"
                >
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </Scroll>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
