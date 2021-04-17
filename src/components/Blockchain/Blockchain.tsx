import React from 'react';
import { Assets } from 'constants/images';
import styled from 'styled-components';

import img from '../../assets/images/Rectangle 12.png';
import polyimg from '../../assets/images/polygroup.png';
import { SpaceRow2 } from 'components/Row';

const Container = styled.div`
    background-image: url("${Assets.polybg}");
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
`;

const TitleBar = styled.div`
    display: flex;
`;

const Title = styled.div`
    background-image: url("${img}");
    background-size: 100% 100%;
    width: 500px;
    height: 160px;
    display: flex;
    justify-content: flex-end;
    vertical-align: middle;
    align-items: center;
    padding-right: 20px;
    @media (max-width: 768px) {
        width: 300px;
        height: 60px;
    }
`;

const Titletext = styled.div`
    font-size: 70px;
    color: #ffffff;
    font-family: sunflower:
    font-weight: normal;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

const TsubArea = styled.div`
    padding-left: 20px;
    width: 80%;
    padding-top: 10px;
`;

const Tsubtext = styled.p`
    font-family: Sunflower;
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 60px;
    display: flex;
    align-items: center;
    color: #3D4341;
    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 13px;
    }
`;

const TsubBtext = styled.p`
    font-family: Sunflower;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
    display: flex;
    align-items: center;
    color: #3D4341;
    padding: 10px 0px;
    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 13px;
    }
`;

const GradBar = styled.div`
    height: 6px;
    width: 100%;
    border-radius: 3px;
    background: linear-gradient(90deg, #4DCC95 0.64%, rgba(255, 255, 255, 0) 102.02%);
    @media (max-width: 768px) {
       display: none;
    }
`;

const RectArea = styled.div`
    padding: 150px 100px;
    @media (max-width: 768px) {
        padding: 30px 15px;
    }
`;
const RectTextArea = styled.div`
    display: flex;
    @media (max-width: 1024px) {
        display: block;
    }
`;

const Prag = styled.p`
    font-family: sunflower;
    font-size: 18px;
    line-height: 24px;   
`;

const Span = styled.span`
    font-weight: bold;
`;

const Rect1 = styled.div`
    min-width: 320px;
    width: 320px;
    height: 200px;
    background: #FFFFFF;
    border: 4px solid #48D79A;
    box-sizing: border-box;
    padding: 40px;
    @media (max-width: 768px) {
        min-width: 300px;
    }
`;
const Rect2 = styled.div`
    min-width: 450px;
    width: 450px;
    height: 185px;
    padding: 25px 50px;
    background: #FFFFFF;
    border: 3px solid #EBEBEB;
    box-sizing: border-box;
    margin-top: 80px;
    margin-left: 120px;
    @media (max-width: 768px) {
        min-width: 300px;
        width: 300px;
        padding: 10px;
        margin-top: 30px;
        margin-left: 30px;
    }

`;

const Rect3 = styled.div`
    min-width: 380px;
    width: 380px;
    height: 200px;
    padding: 25px 50px;
    background: #FFFFFF;
    border: 3px solid #EBEBEB;
    box-sizing: border-box;
    margin-left: 30px;
    margin-top: 30px;
    @media (max-width: 768px) {
        min-width: 320px;
        width: 320px;
        height: auto;
        padding: 20px;
        margin-left: 0px;
    }
`;

const Rect4 = styled.div`
    min-width: 430px;
    width: 430px;
    height: 185px;
    padding: 50px;
    background: #FFFFFF;
    border: 3px solid #EBEBEB;
    box-sizing: border-box;
    margin-top: 120px;
    margin-left: 100px;
    @media (max-width: 768px) {
        min-width: 320px;
        width: 320px;
        padding: 30px;
        margin-top: 30px;
        margin-left: 20px;
        
    }
`;

const ImgArea = styled.div`
    margin-top: 180px;
    min-width: 350px;
    @media (max-width: 1024px) {
        display: none;
    }
`;

// const ETitle = styled.div`
//     background-image: url("${Assets.rec}");  
//     background-size: 100% 100%;
//     width: 500px;
//     height: 150px;
//     display: flex;
//     justify-content: flex-start;
//     vertical-align: middle;
//     align-items: center;
//     padding-right: 20px;
//     @media (max-width: 768px) {
//         width: 300px;
//         height: 60px;
//     }  
// `;

const ETitleBar = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        display: none;
    }
`;

const Blockchain = () => {

    return (
        <Container>
            <TitleBar>
                <Title>
                    <Titletext>Blockchain</Titletext>
                </Title>
                <TsubArea>
                    <Tsubtext>as seen by</Tsubtext>
                    <TsubBtext>Security Experts</TsubBtext>
                    <GradBar></GradBar>
                </TsubArea>
            </TitleBar>
            <SpaceRow2>
                <RectArea>
                    <RectTextArea>
                        <Rect1>
                            <Prag>
                                A key objective of Callisto Network is the implementation of <Span>core features</Span> based on smart contacts.
                            </Prag>
                        </Rect1>
                        <Rect2>
                            <Prag>
                                Thus, we have designed and developed a core <Span>set of protocols</Span> built on smart contracts for a reference implementation of a passive income mechanism, a governance system, and a development funding mechanism.
                            </Prag>
                        </Rect2>
                    </RectTextArea>
                    <RectTextArea>
                        <Rect3>
                            <Prag>
                                Convinced that security is the real catalyst for the adoption of any technology. We have founded the Callisto Security Department, <Span>a team of decentralized auditors, and a trusted audit process.</Span>
                            </Prag>
                        </Rect3>
                        <Rect4>
                            <Prag>
                                Callisto Network is a self-sustaining and self-funded blockchain ecosystem not financed by pre-mined coins or an ICO.
                            </Prag>
                        </Rect4>
                    </RectTextArea>
                </RectArea>
                <ImgArea>
                    <img src={polyimg} alt="polyimg" />
                </ImgArea>
            </SpaceRow2>
            {/* <ETitleBar>
                <TsubArea>
                    <TsubBtext>Security Experts</TsubBtext>
                    <GradBar></GradBar>
                </TsubArea>
                <ETitle>
                    <TitlesubText>Decentralized <br/> Blockchain Ecosystem</TitlesubText>
                </ETitle>
            </ETitleBar> */}
        </Container>
    )
}

export default Blockchain;