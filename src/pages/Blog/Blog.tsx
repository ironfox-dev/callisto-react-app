import React from 'react'

import { brand, links } from 'constants/strings';
import Header from 'components/Header';
import MidImage from 'components/MidImage';
import BackImage from 'components/BackImage';
import MidRightImage from 'components/MidRightImage';
import TopSetion from './components/TopSection';
import TitleSetion from './components/TitleSection';

import { Theme } from 'constants/theme';
import Row, {Row2} from 'components/Row';
import SubTitle from 'components/SubTitle';

import Content from './Content';
import BigTitle from 'components/BigTitle';
import { BodyWrapper } from './components/Wrapper';
import StickyButton from 'components/StickyButton';

const Blog: React.FC = () => {

    return (
        <BodyWrapper>
            <Header backClr={"rgba(0, 0, 0, 1)"}/>
            <TopSetion>
                <TitleSetion>
                    <Row2 pr={"0px"} pl={"0px"}>
                        <BigTitle fontWeight={"500"} color={Theme.colors.white}>{`Callisto's` }</BigTitle>
                        <BigTitle fontWeight={"500"} color={Theme.colors.primary}>&nbsp; Blog</BigTitle>
                    </Row2>
                    <SubTitle color={Theme.colors.white} fontWeight={"300"}>Check our latest updates and blog posts</SubTitle>
                </TitleSetion>
            </TopSetion>
            {/* <BackImage /> */}
            <MidImage top={"100%"} key="left"/>
            <Content />
            <StickyButton/>
            <MidRightImage top={"68%"} key="right"/>
        </BodyWrapper>
    )
}

export default Blog
