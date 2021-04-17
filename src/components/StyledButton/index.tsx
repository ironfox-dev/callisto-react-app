
import styled from 'styled-components'
const StyledButton = styled.button<{bk: string, shadow: string}>`
    background: ${({bk})=>bk};
    border: none;
    padding: 5px 50px;
    margin-right: 15px;
    box-shadow: ${({shadow})=>shadow};
    @media (max-width: 768px) {
        margin-left: calc(50% - 80px);
    }
`;
export default StyledButton;