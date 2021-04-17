import ImageView from 'components/ImageView';
import Spacer from 'components/Spacer';
import StyledText from 'components/StyledText';
import { Assets } from 'constants/images';
import { Theme } from 'constants/theme';
import React from 'react';
import { Router } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { social } from 'constants/strings'

import down from '../../assets/images/coolicon.png';

const Container = styled.div`
    background-image: url("${Assets.bkimg}");
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding-top: 26px;
    margin-top: -75px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    @media (max-width: 768px) {
        background-image: url("${Assets.bkmbimg}");
        height: auto;
    }
`;

const NewsBar = styled.div`
    display: flex;
    height: 42px;
    margin-top: 50px;
    margin-left: 10%;
    @media (max-width: 768px) {
        margin-top: 48px;
        margin-left: 0px;
        
    }
`;

const NewsBtn = styled.li`
    background-color: #34B37C;
    color: #0D281C;
    font-family: sunflower;
    font-style: Bold;
    font-size: 24px;
    line-height: 30px;
    dispaly: flex;
    align-items: center;
    vertical-align: center;
    @media (max-width: 768px) {
        
    }
`;

export const LinkStyledButton = styled.button<{ color: string }>`
    border: none;
    text-decoration: none;
    background-color: ${({color}) => color};
    padding: 10px 15px;
    font-weight: bold;
    @media (max-width: 768px) {
        height: 30px; 
        font-size: 15px;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const NewsInput = styled.div`
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    align-items: center;
    color: #d0dcdb;
    background: linear-gradient(
        90deg
        ,rgb(3 9 6 / 37%) 0%,rgb(55 106 98 / 16%) 35%,rgb(24 99 47 / 8%) 100%);
    width: 400px;
    height: 42px;
    @media (max-width: 768px) {
        background: #0c1c1b;
        width: 100%;
        height: 30px;
    }
`;

const Text = styled.p<{ color: string}>`
    font-family: sunflower;
    font-weight: 300;
    font-size: 24px;
    color: ${({color}) => color} ;
    @media (max-width: 768px) {
        font-size: 15px; 
    }
`;

const TitleArea = styled.div`
    width: 974px;
    background: linear-gradient(
        90deg
        ,rgb(3 9 6 / 37%) 0%,rgb(55 106 98 / 16%) 35%,rgb(24 99 47 / 8%) 100%);
    margin-top: 54px;
    @media (max-width: 768px) {
        background: linear-gradient(90.1deg, #000000 0.09%, #0C1C1B 99.91%);
        width: 100%;
        padding-left: 10px;
    }
`;

const Title = styled.div`
    display: flex;
    justify-content:center;
    @media (max-width: 768px) {
        display: block;
        padding: 10px;
    }
`;
const Titlepre = styled.h1`
    font-weight: 700;
    font-size: 96px;
    line-height: 120px;
    color: white;
    font-family: sunflower;
    @media (max-width: 768px) {
        font-size: 60px;
        line-height: 60px;
    }
`;

const Titleaft = styled.span`
    color: #34B37C;
    font-weight: 700;
    font-size: 96px;
    line-height: 120px;
    font-family: sunflower;
    @media (max-width: 768px) {
        font-size: 60px;
        line-height: 60px;
    }
`;

const Subtitle = styled.p`
    color: white;
    font-size: 24px;
    line-height: 30px;
    margin-top: 30px;
    margin-left: 150px;
    @media (max-width: 768px) {
        margin-left: 0px;
        width: 50%;
        font-size: 16px;
        line-height: 20px;
        padding-left: 20px;
    }
`;

const Parag = styled.p`
    color: white;
    font-weight: 500;
    font-size: 18px;
    line-height: 22.5px;
    margin-left: 150px;
    width: 40%;
    @media (max-width: 768px) {
        width: 80%;
        margin-left: 0px;
        margin-top: 10px;
        font-size: 12px;
        line-height: 15px;
        padding-left: 20px;
    }
`;

const ButtonArea = styled.div`
    display: flex;
    margin-left: 150px;
    margin-top: 10px;
    @media (max-width: 768px) {
        margin-left:0px;
        flex-wrap: wrap;
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
    }
`;

const FooterArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 50px;
    left: calc(50% - 50px);
    @media (max-width: 768px) {
        display: none;
    }
`;

const GetButton = styled.button`
    background-color: ${Theme.colors.primary};
    padding: 8px 50px;
    border: none;
    margin-right: 15px;
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 18px;
        margin-right: 0px;
    }
`;

const StakeButton = styled.button`
    background-color: rgba(0, 0, 0, .1);
    border: 1px solid white;
    padding: 8px 50px;
    margin-right: 15px;
    @media (max-width: 768px) {
        width: 100%;
        margin-right: 0px;
    }
`;

const MoreButton = styled.button`
    background-color: rgba(0, 0, 0, .1);
    border: none;
    padding: 5px;
`;

const Sarea = styled.div`
    position: absoulte;
    bottom: 0px;
`;

const SocialArea = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        padding-top: 40px;
        padding-bottom: 40px;
    }
`;

const ImageSocial = styled.div<{ img: string }>`
    display: flex;
    background-image: ${({img}) => `url(${img})`};
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    margin: 10px;
    background-repeat: no-repeat;
    background-size: contain;
`;

const Intro = () => {

    // const { type, name, link } = props;
    

    return (
       <Container>
            <NewsBar>
                <LinkStyledButton color={"#34B37C"}>
                    <Link to="/news" style={{color: "#0D281C",}}>
                        NEWS
                    </Link>
                </LinkStyledButton>
                <NewsInput>
                    <Text color="#d0dcdb">24/02</Text>
                    <Text color="#d0dcdb">Soy.Finance Launch 24</Text>
                </NewsInput>
            </NewsBar>

            <TitleArea>
                <Title>
                    <Titlepre>Callisto &nbsp; </Titlepre>
                    <Titleaft>Network</Titleaft>
                </Title>
            </TitleArea>
            <Subtitle>Protecting your fund by auditing smart contracts</Subtitle>
            {/* <Spacer height="50px" /> */}
            <Parag>
                {`A comprehensive ecosystem whose main objetice is to improve the security of the smar contract industy`}
            </Parag>
            {/* <Parag>
                {`improve the security of the smar contract industy`}
            </Parag> */}
            <Spacer height="22px" />
            <ButtonArea>
                <GetButton>
                    <StyledText color={Theme.colors.white} fontweight={"500"} fontsize={"19px"}>Get $CLO</StyledText>
                </GetButton>
                <StakeButton>
                    <StyledText color={Theme.colors.white} fontweight={"500"} fontsize={"19px"}>Stake Now</StyledText>
                </StakeButton>
            </ButtonArea>
            <FooterArea>
                <StyledText color={Theme.colors.white} fontweight={"300"} fontsize={"21px"}>Learn More</StyledText>
                <MoreButton>
                    <ImageView img= {Assets.coolicon} width={"30px"} height={"30px"}/>
                </MoreButton>
            </FooterArea>
            <Sarea>
            <SocialArea>
            {
                social?.map((_item, _i)=>{
                    return (
                        <div className="" key={_item.name}>
                            <ImageSocial img={_item.icon}  />
                        </div>
                    )
                })
            }
            </SocialArea>
            </Sarea>

       </Container>
    )
}

export default Intro;