import generateInitialBoardState from "../constants"
import { tActions } from "./actions"
import { IGameState } from "./context"

export const BoardReducer = (state: IGameState, action: tActions): IGameState => {
  switch (action.type) {
    case 'SET_STATE':
      return { ...state, boardState: action.payload }

    case 'RESET_BOARD':
      return {
        ...state,
        boardState: generateInitialBoardState(),
        remainingMarbles: 32
      }


    case 'DROP_MARBLE':
      {
        const killMarbleRowIndex = state.selected.rowIndex === action.payload.rowIndex ? action.payload.rowIndex : (action.payload.rowIndex > state.selected.rowIndex ? state.selected.rowIndex + 1 : state.selected.rowIndex - 1)
        const killMarbleColumnIndex = state.selected.columnIndex === action.payload.columnIndex ? action.payload.columnIndex : (action.payload.columnIndex > state.selected.columnIndex ? state.selected.columnIndex + 1 : state.selected.columnIndex - 1)

        const newBoardingState = [...state.boardState]
        newBoardingState[killMarbleRowIndex][killMarbleColumnIndex].hasMarble = false
        newBoardingState[state.selected.rowIndex][state.selected.columnIndex].hasMarble = false
        newBoardingState[action.payload.rowIndex][action.payload.columnIndex].hasMarble = true

        return {
          ...state,
          selected: {
            rowIndex: -1,
            columnIndex: -1
          },
          boardState: newBoardingState.map(row => row.map(cell => ({
            ...cell,
            allowed: false
          }))),
          remainingMarbles: state.remainingMarbles - 1
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