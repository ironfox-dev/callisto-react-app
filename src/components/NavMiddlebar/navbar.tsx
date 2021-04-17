

// import React from 'react';

// import styled from 'styled-components';
// import {Navbar, Nav} from 'react-bootstrap';
// import { Theme } from 'constants/theme';
// import Row, { SpaceRow } from 'components/Row';
// import ImageView from 'components/ImageView';
// import { Assets } from 'constants/images';
// import StyledText from 'components/StyledText';
// // 180deg, #DEF0EC 0%, rgba(9, 202, 90, 0.08) 0.01%, rgba(222, 240, 236, 0) 100%);

// const Container = styled.div`
//     background-image: linear-gradient(180deg, #DEF0EC 0%, rgba(9, 202, 90, 0.08) 0.01%, rgba(222, 240, 236, 0) 100%);
//     padding: 70px 8%;
//     width: 100%;
//     margin: 0;
//     display: flex;
//     justify-content:center;
//     align-items: center;
//     vertical-align: middle;
// `;

// const LogoArea = styled.div`
//     display: flex;
//     flex-direction: column;

// `;

// const LogoImg = styled.image`
// `;

// const MenuArea = styled.div`
//   display: flex;  
// `;

// const Li = styled.li`
//     list-style: none;
    
// `;
// const ViewCentered = styled.div`
    
// `;

// const NavMiddlebar = () => {
//     const menuData = [
//         {menu: 'Smart Contract Migration', href: '#'},
//         {menu: 'Ecosystem', href: '#'},
//         {menu: 'Passive Income', href: '#'},
//         {menu: 'Governance', href: '#'},
//         {menu: 'CryptoBot', href: '#'},
//     ]
//     return (
//         <Container>
//             <SpaceRow>
//                 <LogoArea>
//                     <Row pl={"0px"} pr={"0px"}>
//                         <ImageView img={Assets.logo2} width={"96px"} height={"96px"} />
//                         <ImageView img={Assets.transrect} width={"288px"} height={"96px"}>
//                             <ViewCentered>
//                                 <StyledText color="#3D4341" fontweight="500" fontsize="18px">Callisto Network(CLO)</StyledText>
//                             </ViewCentered>
//                         </ImageView>
//                     </Row>
//                 </LogoArea>
//                 <MenuArea>
//                     {menuData.map((item, index) => (
//                         <Li key={item.menu}>
//                             <a href={item.href}>{item.menu}</a>
//                         </Li>
//                     ))}
//                 </MenuArea>
//             </SpaceRow>
//         </Container>
//     )
// }

// export default NavMiddlebar;


import styled from 'styled-components';
import { Assets } from 'constants/images';

const Container = styled.div`
    background-image: linear-gradient(180deg, #DEF0EC 0%, rgba(9, 202, 90, 0.08) 0.01%, rgba(222, 240, 236, 0) 100%);
    padding: 60px 8%;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content:space-between;
    align-items: center;
    vertical-align: middle;
`;

const LogoArea = styled.div`
    display: flex;
`;

const LogoImg = styled.div`
    width: 85px;
    height: 85px;
    background-color: #151817;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MenuArea = styled.div`
  display: flex; 
  @media (max-width: 768px) {
      display: none;
  }
`;

const Li = styled.li`
    list-style: none;
    font-family: sunflower;
    font-size: 18px;
    line-height: 30px;
    align-itmems:center;
    vertical-align: center;
    padding: 0 10px;
    text-decoration: underline;
    color: #3D4341;
`;

const LogoTextArea = styled.div`
    background: linear-gradient( 
        90deg
     ,rgb(185 229 207 / 37%) 0%,rgb(143 206 196 / 16%) 35%,rgb(90 213 128 / 8%) 100%);  
    width: 288px;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Subtitle = styled.p`
    font-size: 15px;
    font-weight: bold;
    color: #3D4341;
    padding: 3px;
    line-height: 20px;
`;

const Subtext = styled.p`
    font-size: 15px;
    color: #3D4341;
    padding: 3px;
    line-height: 20px;
`;

const Usd = styled.span`
    font-size: 10px;
`;

const Percentage = styled.span`
    color: green;
    font-size: 14px;
`;

const TextArea = styled.div`
    height: 100%;
    width: 100%;
    padding: 5px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ImgGroup = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 10px;
`;

const NavMiddlebar = () => {
    const menuData = [
        {menu: 'Smart Contract Migration', href: '#'},
        {menu: 'Ecosystem', href: '#'},
        {menu: 'Passive Income', href: '#'},
        {menu: 'Governance', href: '#'},
        {menu: 'CryptoBot', href: '#'},
    ]
    return (
        <Container>
            <div>
                <LogoArea>
                    <LogoImg>
                        <img src={Assets.logo} width="44" height="50" alt="logo" />
                    </LogoImg>
                    <LogoTextArea>
                        <TextArea>
                            <Subtitle>Callisto Network (CLO)</Subtitle>
                            <Subtext>
                                0.006236 
                                <Usd>   USD   </Usd>
                                <Percentage>(+54.4%)</Percentage>
                            </Subtext>
                        </TextArea>
                    </LogoTextArea>
                </LogoArea>
                <ImgGroup>
                    <img src={Assets.coingecko} width='90' height='28' alt='coingecko' />
                    <img src={Assets.coinmarket} width='109' height='20' alt="coinmarket" />
                </ImgGroup>
            </div>
            <MenuArea>
                {menuData.map((item, index) => (
                    <Li key={index}>
                        <a href={item.href}>{item.menu}</a>
                    </Li>
                ))}
            </MenuArea>

        </Container>
    )
}

export default NavMiddlebar;