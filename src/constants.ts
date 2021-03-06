import { ICellProps } from "./models";

const isHidden = (rowIndex: number, columnIndex: number): boolean => {
  return (
    ((rowIndex < 2 || rowIndex > 4) && columnIndex < 2) ||
    ((rowIndex < 2 || rowIndex > 4) && columnIndex > 4)
  );
};

const generateInitialBoardState = (): Array<Array<ICellProps>> => {
  const initialState = Array(7)
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

  initialState[3][3].hasMarble = false;
  return initialState
}
export default generateInitialBoardState;
