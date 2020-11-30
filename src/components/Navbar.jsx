import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown
} from 'reactstrap';

class NavBarComponent extends Component {

    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleButton = this.toggleButton.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false,
            user: {
              isAuth: this.props.isAuth,
              profile: this.props.profile
            },

        }
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleButton() {
      this.setState({
            dropdownOpen: !this.state.dropdownOpen
      });
    }
    handleChange() {
      // console.log('user:', this.state.user)
      this.setState({
        user: { isAuth: false, profile: ''}
      })
    }

    _renderLoginOrLogout() {
      const { isAuth, profile } = this.props;
      // console.log(isAuth, profile)
      if (isAuth) {
          return (
           <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleButton}>
             <DropdownToggle caret color="link" size="sm">
                Welcome, {profile}
             </DropdownToggle>
             <DropdownMenu>
               <DropdownItem>
                 <Link to="/" onClick={this.handleChange}>Logout</Link>
               </DropdownItem>
             </DropdownMenu>
           </ButtonDropdown>
         );
      }

      return ( 
              <NavItem>
                <NavLink href="/">Login</NavLink>
              </NavItem>
            );
    }

    render(){
     return (
        <>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Cars Guide Services</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                {
                  this._renderLoginOrLogout()
                }
            </Nav>
          </Collapse>
        </Navbar>
        </>
     );
    }
}

const mapStateToProps = ({ auth }) => {
  return {
    isAuth: auth.isAuth,
    profile: auth.profile
  };
};

const NavBar = connect(mapStateToProps)(NavBarComponent);
export { NavBar };