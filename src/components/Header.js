import React, { Component } from 'react'

import facebookLogo from '../assets/img/facebook.png'

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src={facebookLogo} />
          <div>
            <span>Meu perfil</span>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    )
  }
}
