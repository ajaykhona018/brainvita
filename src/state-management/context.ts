import React from "react"
import generateInitialBoardState from "../constants"
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
    boardState: generateInitialBoardState(),
    selected: {
      rowIndex: -1,
      columnIndex: -1
    },
    remainingMarbles: 32
  },
  dispatch: () => { }
}

export const GameContext = React.createContext<IGameContext>(initialState)