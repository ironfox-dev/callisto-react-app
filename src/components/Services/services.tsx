

import ImageView from 'components/ImageView';
import Row, { SpaceRow2, StartRow } from 'components/Row';
import ShadowView from 'components/ShadowView';
import Spacer from 'components/Spacer';
import StyledButton from 'components/StyledButton';
import StyledText from 'components/StyledText';
import TextArea from 'components/TextArea';
import Title from 'components/Title';
import { Assets } from 'constants/images';
import { services } from 'constants/strings';
import { Theme } from 'constants/theme';
import React from 'react';

import styled from 'styled-components';
import img from '../../assets/images/rect2.png';

const TsubArea = styled.div`
    padding-left: 20px;
    padding-top: 30px;
`;


const Services = () => {
    
    return (
        <Container>
            <SpaceRow2>
                <div className=""> 
                    <TsubArea>
                        <TsubBtext>Our Services</TsubBtext>
                        <GradBar></GradBar>
                    </TsubArea>
                    {
                        services?.map((_item, _i)=>
                            <div style={{flex: 1}} key={_item.name}>
                                <Spacer height="100px"/>
                                <StartRow pl="0px" pr="0px">
                                    <PolyImg>
                                        <Spacer height="20px"/>
                                        <ImageView img={Assets.poly1} width="35px" height="38px"></ImageView>
                                    </PolyImg>
                                    <Padding padding="0px 0px 0px 10px">
                                        <StyledName>{_item.name}</StyledName>
                                        <StyledTitle>{_item.title}</StyledTitle>
                                        <Spacer height="20px"/>
                                        <StyledName>
                                            {_item.description}
                                        </StyledName>
                                        {/* <Spacer height="10px" />
                                        <StyledName>
                                            {_item.description2}
                                        </StyledName> */}
                                        <Spacer height="20px"/>
                                        <StyledButton bk="linear-gradient(180deg, #3CC58A 0%, #34B37C 100%)" shadow="0px 8px 8px rgba(0, 0, 0, 0.1), 0px 3px 2px rgba(3, 25, 15, 0.09)">
                                            <StyledText color={Theme.colors.white} fontweight="300" fontsize="16px">Learn More</StyledText>
                                        </StyledButton>
                                    </Padding>
                                </StartRow>
                            </div>
                        )
                    }
                    
                </div>
                <Unnec> 
                    <SubView>
                        <ImageView img={img} height={"160px"} width={'100%'}>
                            <CenterdView>
                                <StyledText color={Theme.colors.white} fontsize="48px" fontweight="bold">Decentralized</StyledText>
                                <Spacer height={"20px"}/>
                                <StyledText color={Theme.colors.white} fontsize="48px" fontweight="bold">Blockchain Ecosystem</StyledText>
                            </CenterdView>
                        </ImageView>
                        <Padding padding="100px 191px 0px 100px">
                            <ImageView img={Assets.auditmark} width="480px" height="280px"></ImageView>
                        </Padding>
                        <MagicMargin mt={"-50px"}>
                            <ShadowView bk="#F8F8F8" padding="70px 70px 70px 70px" shadow="0px 8px 8px rgba(0, 0, 0, 0.1), 0px 3px 2px rgba(3, 25, 15, 0.09)" margin="-50px 0px 0px 0px">
                                <Title fontWeight="500">
                                    Why Audit a Smart Contract?
                                </Title>
                                <Padding padding="0px 0px 0px 30px">
                                <TextArea color="rgba(0,0,0,.7)">
                                    Despite popular belief, a smart contract is not safe by nature; as a code, it is subject to bugs and flaws as any program.
                                </TextArea>
                                <Spacer height="20px" />
                                <TextArea color="rgba(0,0,0,.7)">
                                    Such vulnerabilities have already led to several hacking incidents that had severe consequences, involving losses of several hundred million dollars.
                                </TextArea>
                                </Padding>
                            </ShadowView>
                        </MagicMargin>
                        <MagicMargin mt={"-70px"}>
                        <SpaceRow2>
                            <div></div>
                            <ImageView img={Assets.poly3} width="220px" height="230px"></ImageView>
                        </SpaceRow2>
                        </MagicMargin>
                    </SubView>
                </Unnec>
            </SpaceRow2>
            <Spacer height="100px" />
            <Li 
                color={"rgba(0,0,0,.7)"}
            >
                <a href={'/whitepaper/#'}>{"Meet our Partners"}</a>
            </Li>
            <TsubArea>
                <Partnertext>Our Partners</Partnertext>
                <PartnerBar></PartnerBar>
            </TsubArea>
        </Container>
    )
}


const Container = styled.div`
    padding-left: 8%;
    width: 100%;
    margin: 0;
    justify-content:center;
    align-items: center;
    vertical-align: middle;
    @media (max-width: 768px) {
        padding-left: 0;
        padding: 0 20px;
    }
`;
const SubView = styled.div`
    width: 100%;
    display: flex;
    padding-left: 50px;
    flex-direction: column;
    justify-content: flex-end;

`;
const Padding = styled.div<{padding: string}>`
    width: 100%;
    padding: ${({padding})=>padding};
`;
const MagicMargin = styled.div<{mt: string}>`
    width: 100%;
    margin-top: ${({mt}) => mt};
    z-index: -1;
`
const CenterdView = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 30px;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
        width: 300px;
        height: 60px;
    }
`;

const TitlesubText = styled.div`
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
        line-height: 20px;
    }
`;

const GradBar = styled.div`
    height: 6px;
    width: 100%;
    background: linear-gradient(90deg, #4DCC95 0.64%, rgba(255, 255, 255, 0) 102.02%);
    border-radius: 3px;
    @media (max-width: 768px) {
       height:2px;
    }
`;

const Li = styled.li<{color: string}>`
    flex: 0 0 auto;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    color: #999;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    text-align: center;
    font-weight: 500;
    display: flex;
    font-size: 14px;
    justify-content: center;
    text-decoration: none;
    white-space: nowrap;
    padding-left: 10px;
    a {
        color: ${({color}) => color};
        font-weight: 500;
        width: 100%;
        font-family: ${Theme.fonts.title}
        text-decoration: none;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const Unnec = styled.div`
    display: block;
    width: 50%;
    @media (max-width: 768px) {
        display: none;
    }
`;

const PolyImg = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;

const StyledName = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: rgba(0,0,0,.5);
    font-family: Sunflower;
    @media (max-width: 768px) {
        text-align: center;
        font-size: 17px;
    }
`;

const StyledTitle = styled.h2`
    font-size:32px;
    font-weight: 300;
    color: rgba(0,0,0,1);
    font-family: Sunflower;
    @media (max-width: 768px) {
        text-align: center;
        font-size: 28px;
    }
`;

const PartnerBar = styled.div`
    display: none;
    height: 2px;
    width: 100%;
    background: linear-gradient(90deg, #4DCC95 0.64%, rgba(255, 255, 255, 0) 102.02%);
    border-radius: 3px;
    @media (max-width: 768px) {
       display: block;
    }
`;

const Partnertext = styled.p`
    font-family: Sunflower;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    display: none;
    align-items: center;
    color: #3D4341;
    padding: 10px 0px;
    @media (max-width: 768px) {
        display: flex;
    }
`;

export default Services;