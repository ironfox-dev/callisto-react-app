import SubTitle from 'components/SubTitle'
import TextArea from 'components/TextArea'
import { Assets } from 'constants/images'
import { Theme } from 'constants/theme'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    min-height: 384px;
    background-color: ${Theme.colors.white};
    margin: 96px 20px 0px 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
        margin: 20px 0px;
    }
`
const Image = styled.div<{ img: string }>`
    background-image: ${({img}) => `url(${img})`};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 192px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
`
const Text = styled.div<{ color: string, fontWeight: string }>`
    font-weight: ${({fontWeight}) => fontWeight};
    color: ${({color}) => color};
    font-family: ${Theme.fonts.body};
    font-size: 18px;
    line-height: 22.5px;
    padding-left: 10px;
    padding-right: 10px;
`
const Padding = styled.div`
    padding: 10px;
`
const Padding2 = styled.div`
    padding: 10px 20px 20px 20px;
`
const Padding3 = styled.div`
    padding: 0px 10px;
`
const Card = ({data}) => {

    return (
        <Container>
            <Image img={data.image} />
            <Padding>
                <SubTitle color={"black"} fontWeight={"500"} >{data.title}</SubTitle>
            </Padding>
            <Padding3>
                <Text color={"black"} fontWeight={"300"}>{data.date}</Text>
            </Padding3>
            <Padding2>
                <TextArea color={Theme.colors.fifth}>{data.description}</TextArea>
            </Padding2>
        </Container>
    )
}
export default Card;
