import React from 'react'
import { ICellProps } from '../models'
import { CellStyled, MarblePlaceHolder, MarbleStyled } from '../styles'
import { GameContext } from '../state-management/context'

const Cell = ({ hasMarble, isVisible, rowIndex, columnIndex, allowed }: ICellProps) => {
  const { dispatch } = React.useContext(GameContext)

  const handleDragStart = () => {
    dispatch({ type: 'SET_SELECTION', payload: { rowIndex, columnIndex } })
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    if (allowed) {
      event.preventDefault()
    }
  }

  const handleDrop = () => {
    console.log('Handle Drop')
    dispatch({ type: 'DROP_MARBLE', payload: { rowIndex, columnIndex } })
  }

  const handleDragEnd = () => {
    dispatch({ type: 'RESET_SELECTION' })
  }

  return <CellStyled
    hide={!isVisible} allowed={allowed}
    onDragOver={handleDragOver}
    onDrop={handleDrop}
    onDragEnd={handleDragEnd}>

    <MarblePlaceHolder>
      {hasMarble && <MarbleStyled draggable onDragStart={handleDragStart} />}
    </MarblePlaceHolder>

  </CellStyled>

}

export default Cell