import styled from "styled-components";

export const AppContainer = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  background-color: #444; 
  min-height: 100vh;
`
export const BoardStyled = styled.div`
  background-color: lightgreen;
  width: 575px;
  border-radius: 50%;
  height: 575px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: auto;
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

export const Header = styled.div`
  height: 60px;
  background-color: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 10px;
`

export const SubHeader = styled.div`
  font-size: 15px;
  letter-spacing: 5px;
  text-transform: capitalize;
`

export const SideBar = styled.div`
  background-color: #eee;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
`

export const MarbleCountStatus = styled.div`
  text-align: center;
  font-size: 25px;
  margin: 25px 10px;
  letter-spacing: 3px;
`

export const Button = styled.button`
  background-color: darkgreen;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin: 0px 5px;
  box-shadow: 0px 2px 5px #444;
  
  &:hover {
    opacity: 0.8;
  }

  &:focus {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: 0px 2px 2px #444;
  }
`

export const FormContainer = styled.form`
  .form-field {
    margin: 15px 10px;

    input {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
    }
  }

  .form-actions {
    margin: 15px 0px;
    text-align: center;

    #reset {
      background-color: white;
      color: darkgreen;
    }

    #submit {
      background-color: darkgreen;
      color: white;
    }
  }

  .messages {
    .message-success {
      color: darkgreen;
    }

    .message-error {
      color: red;
    }
  }
`

export const GameContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`
