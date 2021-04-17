import styled from 'styled-components'

const Row = styled.div<{pl: string, pr: string}>`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px;
  padding-left: ${({pl}) => pl};
  padding-right: ${({pr}) => pr};
  align-items: center;
`
export const StartRow = styled.div<{pl: string, pr: string}>`
  width: 100%;
  display: flex;
  padding: 0px;
  padding-left: ${({pl}) => pl};
  padding-right: ${({pr}) => pr};
`

export const Row2 = styled.div<{pl: string, pr: string}>`
  display: flex;
  padding: 0px;
  padding-left: ${({pl}) => pl};
  padding-right: ${({pr}) => pr};
  align-items: center;
`

export const SpaceRow = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0px;
    justify-content: space-between;
    align-items: center;
`

export const SpaceRow2 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0px;
    justify-content: space-between;
`
export default Row
