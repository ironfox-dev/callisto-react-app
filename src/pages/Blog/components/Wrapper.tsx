import { Theme } from 'constants/theme';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-left: 8%;
    width: 84%;
    background-color: ${Theme.colors.blogback};
`
export const BodyWrapper = styled.div`
    width: 100%;
    background-color: ${Theme.colors.blogback};
    padding-bottom: 20px;
`
export default Wrapper;
