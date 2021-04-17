import Page from 'components/layout/Page';
import { Assets } from 'constants/images';
import React from 'react'
import styled from 'styled-components'

import Header from 'components/Header';
import t from 'components/Header/types';

import Intro from 'components/Intro';
import NavMiddlebar from 'components/NavMiddlebar';
import Blockchain from 'components/Blockchain';
import Services from 'components/Services';
import StickyButton from 'components/StickyButton';
import BackImage from 'components/BackImage';
import { SpaceRow } from 'components/Row';
import StyledText from 'components/StyledText';
import { NavItem } from 'react-bootstrap';

const brand = {
  name: "Callisto",
  img: Assets.logo,
  link: "/",
}

const links = [{
    type: t.DROPDOWN,
    name: "Services",
    link: "/services",
},{
    type: t.DROPDOWN,
    name: "Ecosystem",
    link: "/ecosystem",
},{
    type: "",
    name: "Blog",
    link: "/blog",
},{
    type: "",
    name: "Cryptocurrency",
    link: "/cryptocurrency",
},{
    type: "",
    name: "Get an audit",
    link: "/audit",
},{
    type: t.RECT,
    name: "Whitepaper",
    link: "/whitepaper",
}];

const partners = [
    {name: "PARTNER", },
    {name: "PARTNER", },
    {name: "PARTNER", },
    {name: "PARTNER", },
    {name: "PARTNER", },
    {name: "PARTNER", },
]

console.log("parter", partners)

const Home: React.FC = () => {

    return (
        <>
            {/* <Hero> */}
                {/* <Header brand={brand} links={links} backClr={"#000"}/> */}
                <Header backClr="rgba(0, 0, 0, .5)"/>
            {/* </Hero> */}
            {/* <div style={{flex: 1}}>
                <Intro />
            </div> */}
            <Intro />
            <StickyButton />
            <NavMiddlebar />
            <Blockchain />
            <Services />
            
            <Footer>
                <WhiteBack>
                    <Partnergroup>
                        {partners.map((item, index) => (
                            <Partner key={index}>{item.name}</Partner>
                        ))}
                    </Partnergroup>
                </WhiteBack>
            </Footer>            
        </>
    )
}


const Footer = styled.div`
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #1AB06F 100%);;
    width: 100%;
    height: 250px;
    margin-top: 30px;
    display: flex;
    align-items: flex-end;
`;

const WhiteBack = styled.div`
    background-color: white;
    width: 100%;
    height: 90%;
    overflow: hidden;
    white-space: nowrap;
`;

const Partnergroup = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0px;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        flex-wrap: wrap;                                                                                                  
        justify-content: space-evenly;
    }
`;

const Partner = styled.div`
    color: rgba(0,0,0,.22);
    font-weight: 900;
    font-size: 72px;
    font-family: Sunflower;
    padding-right: 300px;
    @media (max-width: 768px) {
        font-size: 35px;
        padding-right: 0px;
        padding: 10px;
    }
`;

export default Home;