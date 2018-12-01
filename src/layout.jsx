import styled from '@emotion/styled'

export const Panel = styled.div`
  flex: 1;
`

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;

  ${(props) => props.divider ? `
    ${Panel} + ${Panel} {
      padding-left: 20px;
      border-left: 1px solid rgba(255, 255, 255, 0.8);
    }
  ` : ''}
`

export const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
