import React from "react";
import INITIAL_BOARD_STATE from "../../constants";
import { ICellProps } from "../../models";
import { RowStyled } from "../../styles";
import Cell from "../Cell";
import { tActions } from "./actions";

export interface IGameState {
  boardState: ICellProps[][],
  selected: {
    rowIndex: number,
    columnIndex: number
  }
}
export interface IGameContext {
  state: IGameState
  dispatch: React.Dispatch<tActions>
}

const initialState = {
  state: {
    boardState: INITIAL_BOARD_STATE,
    selected: {
      rowIndex: -1,
      columnIndex: -1
    }
  },
  dispatch: () => { }
}

export const GameContext = React.createContext<IGameContext>(initialState)

const BoardReducer = (state: IGameState, action: tActions): IGameState => {
  switch (action.type) {
    case 'SET_STATE':
      return { ...state, boardState: action.payload }

    case 'DROP_MARBLE':
      {
        const killMarbleRowIndex = state.selected.rowIndex === action.payload.rowIndex ? action.payload.rowIndex : (action.payload.rowIndex > state.selected.rowIndex ? state.selected.rowIndex + 1 : state.selected.rowIndex - 1)
        const killMarbleColumnIndex = state.selected.columnIndex === action.payload.columnIndex ? action.payload.columnIndex : (action.payload.columnIndex > state.selected.columnIndex ? state.selected.columnIndex + 1 : state.selected.columnIndex - 1)

        const newBoardingState = [...state.boardState]
        newBoardingState[killMarbleRowIndex][killMarbleColumnIndex].hasMarble = false
        newBoardingState[state.selected.rowIndex][state.selected.columnIndex].hasMarble = false

        return {
          ...state,
          selected: {
            rowIndex: -1,
            columnIndex: -1
          },
          boardState: newBoardingState.map(row => row.map(cell => ({
            ...cell,
            allowed: false,
            // hasMarble: cell.rowIndex === killMarbleRowIndex && cell.columnIndex === killMarbleColumnIndex ? false : cell.hasMarble
          })))
        }
      }
    case 'RESET_SELECTION':
      return {
        ...state,
        selected: { rowIndex: -1, columnIndex: -1 },
        boardState: state.boardState.map(row => row.map(cell => ({ ...cell, allowed: false })))
      }

    case 'SET_SELECTION':
      const newBoardState = state.boardState.map(row => row.map(cell => ({ ...cell, allowed: false })))

      const { rowIndex: selectedRowIndex, columnIndex: selectedColumnIndex } = action.payload

      /** Down Direction */
      if (newBoardState?.[selectedRowIndex + 2]?.[selectedColumnIndex] && !newBoardState?.[selectedRowIndex + 2]?.[selectedColumnIndex]?.hasMarble && newBoardState?.[selectedRowIndex + 1]?.[selectedColumnIndex].hasMarble) {
        newBoardState[selectedRowIndex + 2][selectedColumnIndex].allowed = true
      }
      /** Up Direction */
      if (newBoardState?.[selectedRowIndex - 2]?.[selectedColumnIndex] && !newBoardState?.[selectedRowIndex - 2]?.[selectedColumnIndex]?.hasMarble && newBoardState?.[selectedRowIndex - 1]?.[selectedColumnIndex].hasMarble) {
        newBoardState[selectedRowIndex - 2][selectedColumnIndex].allowed = true
      }

      /** Right Direction */
      if (newBoardState?.[selectedRowIndex]?.[selectedColumnIndex + 2] && !newBoardState?.[selectedRowIndex]?.[selectedColumnIndex + 2]?.hasMarble && newBoardState?.[selectedRowIndex]?.[selectedColumnIndex + 1].hasMarble) {
        newBoardState[selectedRowIndex][selectedColumnIndex + 2].allowed = true
      }

      /** Left Direction */
      if (newBoardState?.[selectedRowIndex]?.[selectedColumnIndex - 2] && !newBoardState?.[selectedRowIndex]?.[selectedColumnIndex - 2]?.hasMarble && newBoardState?.[selectedRowIndex]?.[selectedColumnIndex - 1].hasMarble) {
        newBoardState[selectedRowIndex][selectedColumnIndex - 2].allowed = true
      }

      return { ...state, boardState: newBoardState, selected: action.payload }
  }
}

const Board = () => {

  const [state, dispatch] = React.useReducer(BoardReducer, initialState.state)

  return (
    <GameContext.Provider value={{ state, dispatch }}>
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
