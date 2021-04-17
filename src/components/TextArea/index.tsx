import { Theme } from 'constants/theme';
import styled from 'styled-components'

const TextArea = styled.p<{ color: string}>`
    font-weight: 400;
    color:${({color}) => color};
    font-family: ${Theme.fonts.title};
    font-size: 16px;
    line-height: 26px;
    letter-spacing: .2px;
    text-align: start;
    @media (max-width: 768px) {
        padding: 20px;
    }
`

export default TextArea;
