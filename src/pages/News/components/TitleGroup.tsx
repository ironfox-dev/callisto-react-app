import styled from 'styled-components';

const TitleGroup = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0px;
    justify-content: space-between;
    align-items: center;
    @media (max-width:768px) {
        flex-wrap: wrap;
    }
`;

export default TitleGroup;