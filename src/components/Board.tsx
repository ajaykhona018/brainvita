import React, { useContext } from "react";
import { BoardStyled, RowStyled } from "../styles";
import Cell from "./Cell";
import { GameContext } from "../state-management/context";

const Board = () => {

  const { state } = useContext(GameContext)

  return (
    <>
      <BoardStyled>
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
      </BoardStyled>
    </>
  );
};

export default Board;
