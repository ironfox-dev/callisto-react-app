import SubTitle from 'components/SubTitle';
import Title from 'components/Title';
import { Theme } from 'constants/theme';
import * as React from 'react';
import styled from 'styled-components';
import TextArea from 'components/TextArea';

const Container = styled.div`
    width: 100%;
    padding: 30px;
    align-items: center;
    @media (max-width: 768px) {
        padding: 0px;
    }
`

const ContentSection = ({item}) => {

    return (
        <Container>
            <SubTitle color={Theme.colors.third} fontWeight={"600"} key={item.section}>{item.section}</SubTitle>
            <TextArea color={Theme.colors.primary2}>{item.description}</TextArea>
        </Container>
    )
}

export default ContentSection;
