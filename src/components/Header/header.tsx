
import { Theme } from 'constants/theme';
import React from 'react'
import styled from 'styled-components'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
// import t, { headerProps, action, brand } from './types';

// const Header = (props: headerProps) => {
const Header = (props: { backClr: string}) => {
    const { backClr } = props;
    return (
      
        <Navbar collapseOnSelect expand="md" style={{backgroundColor: backClr}} variant="dark" sticky="top">
            <Navbar.Brand href="/">
                <Logo>
                    <LogoImg src={logo} className="App-logo" alt="logo" />
                    <LogoText>Callisto</LogoText>
                </Logo>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Li>
                        <NavDropdown title="Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#services/1.1">Services1</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#services/1.2">Services2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#services/1.3">Services3</NavDropdown.Item>
                        </NavDropdown>
                    </Li>

                    <Li>
                        <NavDropdown title="Ecosystem" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#ecosystem1">Ecosystem1</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#ecosystem2">Ecosystem2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#ecosystem3">Ecosystem3</NavDropdown.Item>
                        </NavDropdown>
                    </Li>
                    <Li>
                        <Nav.Link href="/blog" >Blog</Nav.Link>
                    </Li>
                    <Li>
                        <Nav.Link href="/Cyptocurrency">Cyptocurrency</Nav.Link>
                    </Li>
                    <Li>
                        <Nav.Link href="/get an audit">Get an audit</Nav.Link>
                    </Li>
                    
                    <Nav.Link href="/whitepaper">
                        <Whitepaper>Whitepaper</Whitepaper>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Logo = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    margin-left: 120px;
    @media (max-width: 768px) {
        margin-left: 20px;
    }
`;

const LogoImg = styled.img`
    width: 44px;
    height: 50px;
`;

const LogoText = styled.div`   
    font-family: Sunflower;
    font-weight: normal;
    padding-left: 15px;
    font-size: 24px;
`;

const Li = styled.div`
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 18px;
`;

const Whitepaper = styled.div`
    flex: 0 0 auto;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    color: white;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    display: flex;
    font-size: 18px;
    height: 40px;
    justify-content: center;
    line-height: 16px;
    margin: 0 1.125rem ;
    text-decoration: none;
    border: 2px solid white;
    padding: 0 30px;
    white-space: nowrap;
`;

export default Header;