import { ICellProps } from './../../models';

interface ISetState {
  readonly type: 'SET_STATE'
  payload: ICellProps[][]
}

interface ISetSelection {
  readonly type: 'SET_SELECTION'
  payload: {
    rowIndex: number
    columnIndex: number
  }
}
interface IResetSelection {
  readonly type: 'RESET_SELECTION'
}

interface IDropMarble {
  readonly type: 'DROP_MARBLE'
  payload: {
    rowIndex: number
    columnIndex: number
  }
}

export type tActions =
  | ISetState
  | ISetSelection
  | IDropMarble
  | IResetSelection