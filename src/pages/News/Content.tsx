import ImageView from 'components/ImageView'
import Row, { SpaceRow } from 'components/Row'
import { Assets } from 'constants/images'
import Wrapper from './components/Wrapper';
import HeadLeft from './components/HeadLeft';
import HeadRight from './components/HeadRight';
import Title from 'components/Title';
import SubTitle from 'components/SubTitle';
import { Theme } from 'constants/theme';
import TextArea from 'components/TextArea';
import SubWrapper from './components/SubWraper';
import Spacer from 'components/Spacer';
import TitleGroup from './components/TitleGroup';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

const lorem2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const Content = ({}) => {

    return (
        <Wrapper>
            <TitleGroup>
                <HeadLeft >
                    <Title fontWeight={"500"}>Callisto Weekly Repot</Title>
                    <Row pl={'20px'} pr={"10px"}>
                        <SubTitle color={Theme.colors.grey} fontWeight={"600"} >By Callisto Team</SubTitle>
                        <ImageView img={Assets.avatar} height={"20px"} width={"20px"}/>
                    </Row>
                    <div style={{marginLeft: 30}}>
                        <TextArea color={Theme.colors.fourth}>{lorem}</TextArea>
                    </div>
                </HeadLeft>
                <HeadRight >
                    <ImageView img={Assets.newsmark} height={"300px"} width={"100%"}/>
                </HeadRight>
            </TitleGroup>
            <Spacer height={"50px"} />
            <SubWrapper>
                <TextArea color={Theme.colors.fourth}>{lorem}</TextArea>
                <Spacer height={"50px"} />
                <TextArea color={Theme.colors.fourth} >{lorem2}</TextArea>
                <Spacer height={"50px"} />
                <TitleGroup>
                    <HeadLeft >
                        <ImageView img={Assets.newsmark2} height={"300px"} width={"100%"}/>
                    </HeadLeft>
                    <HeadRight >
                        <ImageView img={Assets.newsmark3} height={"300px"} width={"100%"}/>
                    </HeadRight>
                </TitleGroup>
                <Spacer height={"80px"} />
                <TextArea color={Theme.colors.fourth} >{lorem}</TextArea>
                <Spacer height={"50px"} />
                <TextArea color={Theme.colors.fourth}>{lorem2}</TextArea>
                <Spacer height={"50px"}/>
            </SubWrapper>
        </Wrapper>
    )
}

export default Content
