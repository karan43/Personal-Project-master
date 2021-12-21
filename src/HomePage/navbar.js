import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import '../animate.css';
import Logo from '../assets/ICT/react.jpg'


export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'transparent',
      opacity: 1,
      activeKey: 0,
    };
  }
  listenScrollEvent = e => {
    if (window.scrollY > 640) {
      this.setState({ background: '#1C6BBA', opacity: 0.9 })
    }
    else {
      this.setState({ background: 'transparent', opacity: 1 })
    }
  }
  handleSelect(selectedKey) {
    this.setState({
      activeKey: selectedKey
    });
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }
  componentWillMount() {
    const menuname = window.location.hash;
    switch (true) {
      case menuname.startsWith('#/aboutus'):
        this.setState({ activeKey: 2 });
        break;
      case menuname.startsWith('#/product'):
        this.setState({ activeKey: 3 });
        break;
      case menuname.startsWith('#/career'):
        this.setState({ activeKey: 4 });
        break;
      case menuname.startsWith('#/blog'):
        this.setState({ activeKey: 5 });
        break;
      default:
        this.setState({ activeKey: 1 });
    }
  }
  render() {
    return (
      <div className="App container">
        <Navbar fluid fixedTop collapseOnSelect style={{ background: this.state.background, opacity: this.state.opacity }}>
          <Navbar.Header>
            <Navbar.Brand className="animated fadeInLeft">
              <a href="/" className='logo'><img src={Logo} alt='logo' width='100px' height='100px' /></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight
              activeKey={this.state.activeKey}
              onSelect={k => { this.handleSelect(k) }}>
              <NavItem className="nav-items" id="elm" eventKey={1} componentClass={NavLink} href='/' to='/' exact={true}>HOME</NavItem>
              <NavDropdown className="nav-items" noCaret title="ABOUT US " >
                <MenuItem componentClass={NavLink} href='/aboutus' to='/aboutus' eventKey={2.1}>Mission</MenuItem>
                <MenuItem componentClass={NavLink} href='/aboutus' to='/aboutus'eventKey={2.2}>Vision</MenuItem>
                <MenuItem componentClass={NavLink} href='/aboutus' to='/aboutus' eventKey={2.3}>Goal</MenuItem>
              </NavDropdown>
              <NavItem className="nav-items" eventKey={3} componentClass={NavLink} href='/product' to='/product' exact={true}>NOTICE BOARD</NavItem>
              <NavDropdown className="nav-items" noCaret title="ACTIVITIES" >
                <MenuItem componentClass={NavLink} href='/blog' to='/blog' eventKey={6.1}>Pradesh-1</MenuItem>
                <MenuItem componentClass={NavLink} href='/blog' to='/blog' eventKey={6.2}>Pradesh-2</MenuItem>
                <MenuItem componentClass={NavLink} href='/blog' to='/blog' eventKey={6.3}>Bagmati Pradesh</MenuItem>
                <MenuItem componentClass={NavLink} href='/blog' to='/blog' eventKey={6.4}>Gandaki Pradesh</MenuItem>
                <MenuItem componentClass={NavLink} href='/blog' to='/blog' eventKey={6.5}>Lumbini Pradesh</MenuItem>
                <MenuItem componentClass={NavLink} href='/blog' to='/blog' eventKey={6.6}>Karnali Pradesh</MenuItem>
                <MenuItem componentClass={NavLink} href='/blog' to='/blog' eventKey={6.7}>Sudur Paschim Pradesh</MenuItem>
              </NavDropdown>
              <NavItem className="nav-items" eventKey={4} componentClass={NavLink} href='/career' to='/career' exact={true}>PHOTO GALLERY</NavItem>
              <NavItem className="nav-items" eventKey={5} componentClass={NavLink} href='/blog' to='/blog' exact={true}>VIDEOS</NavItem>
              <NavItem className="nav-items" eventKey={7} componentClass={NavLink} href='/blog' to='/blog' exact={true}>PRESS RELEASE</NavItem>
              <NavItem className="nav-items" eventKey={8} componentClass={NavLink} href='/product' to='/product' exact={true}>DOWNLOADS</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
