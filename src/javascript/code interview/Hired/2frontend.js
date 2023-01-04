const solution = (maze, startRow, startCol, destRow, destCol) => {
  let mazeMap = [...maze];
  mazeMap[startRow][startCol] = "*";
  mazeMap[destRow][destCol] = "D";
  let actualCol = startRow;
  let actualRow = startCol;

  function move(direction, actualCol, actualRow) {
    if (mazeMap[actualCol][actualRow + 1] === "D") return (actualRow += 1);
    if (mazeMap[actualCol][actualRow + 1] !== 0) {
      return false;
    }
    mazeMap[actualCol][actualRow + 1] = "*";
    actualRow += 1;
  }

  while (mazeMap[actualCol][actualRow] !== "D") {
    console.log(mazeMap);

    goToRight(actualCol, actualRow);
    goToLeft(actualCol, actualRow);
    goToBottom(actualCol, actualRow);
    goToTop(actualCol, actualRow);
  }
};
