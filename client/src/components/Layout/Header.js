import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Icon, Menu } from 'antd';

import '../../styles/layout.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


// this is a class because it needs state
class Header extends Component {

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <header className="topnavbar-wrapper">
          <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
          >
              <Menu.Item key="home">
                  <Link to="/" rel="noopener noreferrer">Home</Link>
              </Menu.Item>
              <Menu.Item key="about">
                  <Link to="/about" rel="noopener noreferrer">About</Link>
              </Menu.Item>
          </Menu>
      </header>
    );
  }
}

export default Header;