import * as React from 'react';
import styled from 'styled-components';
import SectionItem from './SetionItem';
import { Theme } from 'constants/theme';
import Title from 'components/Title';
import Line from 'components/Line';
import ContentSection from './ContentSection';


const Container = styled.div`
    width: 50%;
    background-color: ${Theme.colors.white};
    padding: 10px 0px 0px 30px;
    @media (max-width: 768px) {
        width: 100%;
        padding: 0px;
    }
`
const data = [{
    section: "Intro",
    description: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
},{
    section: "About Us",
    description:  "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
}];

const LineWrapper = styled.div`
    padding: 5px 30px;
`

const MidPane = ({}) => {
    const [curIdx, setCurIdx] = React.useState(0);
    return (
        <Container>
            <Title fontWeight={"600"}>What is Callisto?</Title>
            <LineWrapper>
                <Line color={Theme.colors.grey}/>
            </LineWrapper>
            {
                data.map((_item, _i) => <ContentSection item={_item} key={"doc2" + _i.toString()}/> )
            }
            
        </Container>
    )
}

export default MidPane;
