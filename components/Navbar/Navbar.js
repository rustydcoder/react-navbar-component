import React, {Component} from 'react';
import {MenuItems} from './MenuItems';
import {Button} from '../Button'
import './Navbar.css';

class Navbar extends Component {
  state = { active: false }

  handleClick = (ev) => this.setState({
      active: !this.state.active
    })

  render() {
    return (

      <nav className='navbarItems'>
        <h1 className='navbar-logo'>React <i className="fab fa-react"></i></h1>

        <div className='menu-icon' onClick={this.handleClick}>
          <i className={this.state.active ? 'fas fa-times' : 'fa fa-bars'} ></i>
        </div>

        <ul className={this.state.active ? 'nav-menu active': 'nav-menu'}>
            {
              MenuItems.map((item, index) => 
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>)
            }
        </ul>

        <Button>Sign Up</Button>
      </nav>

    )
  }
}

export {Navbar}