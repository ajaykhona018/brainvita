import { ICellProps } from "./models";

const isHidden = (rowIndex: number, columnIndex: number): boolean => {
  return (
    ((rowIndex < 2 || rowIndex > 4) && columnIndex < 2) ||
    ((rowIndex < 2 || rowIndex > 4) && columnIndex > 4)
  );
};

const INITIAL_BOARD_STATE: Array<Array<ICellProps>> = Array(7)
  .fill([])
  .map((_, rowIndex) => {
    return Array(7)
      .fill({})
      .map((__, columnIndex) => {
        const isCellHidden = isHidden(rowIndex, columnIndex);
        return {
          rowIndex,
          columnIndex,
          isVisible: !isCellHidden,
          hasMarble: !isCellHidden,
          allowed: false
        };
      });
  });

INITIAL_BOARD_STATE[3][3].hasMarble = false;
export default INITIAL_BOARD_STATE;
