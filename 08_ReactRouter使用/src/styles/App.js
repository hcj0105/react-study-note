import styled from 'styled-components'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .header {
    height: 64px;
    border-bottom: 1px solid black;
  }

  .footer {
    height: 64px;
    border-top: 1px solid black;
  }

  .main {
    height: calc(100% - 128px);
  }
`

export default AppWrapper
