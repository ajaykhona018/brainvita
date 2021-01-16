import React from "react";
import { RowStyled } from "../../styles";
import Cell from "../Cell";
import { GameContext, initialState } from "./context";
import { BoardReducer } from "./reducer";

const Board = () => {

  const [state, dispatch] = React.useReducer(BoardReducer, initialState.state)

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <div>Remaining Marbles: {state.remainingMarbles}</div>
      {state.boardState.map((row, rowIndex) => {
        return (
          <RowStyled key={rowIndex} style={{ display: "flex" }}>
            {row.map((cell) => {
              return (
                <Cell key={cell.columnIndex} {...cell}></Cell>
              );
            })}
          </RowStyled>
        );
      })}
    </GameContext.Provider>
  );
};

export default Board;
