import styled from "styled-components";

export const AppContainer = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const RowStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

interface ICellStyledProps {
  hide?: boolean
  allowed?: boolean
}

export const CellStyled = styled.div<ICellStyledProps>`
  width: 50px;
  height: 50px;
  padding: 10px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
  ${({ hide }) => hide && `opacity: 0;`}
  ${({ allowed }) => allowed && `
    border: 1px dashed black;
    ${MarblePlaceHolder} {
      background-color: transparent;
    }
  `}
`

export const MarblePlaceHolder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: darkgreen;
  box-shadow: inset 1px 1px 10px darkgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
export const MarbleStyled = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
  background: radial-gradient(circle at 100px 100px, #5cabff, #000);
`