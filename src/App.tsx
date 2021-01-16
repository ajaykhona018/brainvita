import React from 'react';
import Board from './components/Board'
import Form from './components/Form';
import './index.css';
import { initialState, GameContext } from './state-management/context';
import { BoardReducer } from './state-management/reducer';
import { AppContainer, GameContainer, Header, MarbleCountStatus, SideBar, SubHeader } from './styles';

function App() {
  const [state, dispatch] = React.useReducer(BoardReducer, initialState.state)

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <AppContainer>
        <SideBar>
          <MarbleCountStatus>Remaining Marbles: <strong>{state.remainingMarbles}</strong></MarbleCountStatus>
          <Form></Form>
        </SideBar>
        <GameContainer>
          <Header>
            <div>Brain Vita </div>
            <SubHeader>Know how to get down to "one" !!</SubHeader>
          </Header>
          <Board />
        </GameContainer>
      </AppContainer >
    </GameContext.Provider>
  );
}

export default App;
