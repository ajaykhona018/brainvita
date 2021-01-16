import React from "react"
import INITIAL_BOARD_STATE from "../constants"
import { ICellProps } from "../models"
import { tActions } from "./actions"

export interface IGameState {
  boardState: ICellProps[][],
  selected: {
    rowIndex: number,
    columnIndex: number
  },
  remainingMarbles: number
}
export interface IGameContext {
  state: IGameState
  dispatch: React.Dispatch<tActions>
}

export const initialState: IGameContext = {
  state: {
    boardState: INITIAL_BOARD_STATE(),
    selected: {
      rowIndex: -1,
      columnIndex: -1
    },
    remainingMarbles: 32
  },
  dispatch: () => { }
}

export const GameContext = React.createContext<IGameContext>(initialState)