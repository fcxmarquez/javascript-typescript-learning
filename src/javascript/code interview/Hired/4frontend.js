const solution = (pot) => {
  const mapObj = [...pot];
  const lastRowIndex = mapObj.length - 1;
  let actualCol = 0;
  let actualRow = 0;

  const destination = (lastRow) => {
    for (let i = 0; i < mapObj[lastRowIndex].length; i++) {
      if (mapObj[lastRowIndex][i] === 0) {
        mapObj[lastRowIndex][i] = "D";
      }
    }
  };

  const isValid = () => {
    for (let i = 0; i < mapObj[0].length; i++) {
      var isInvalid = true;
      if (mapObj[0][i] === 0) {
        isInvalid = false;
        break;
      }
    }
    if (isInvalid) return false;
  };

  const move = (direction) => {
    switch (direction) {
      case "up":
        if (
          mapObj[actualCol - 1] !== undefined &&
          mapObj[actualCol - 1][actualRow] !== 1
        ) {
          if (mapObj[actualCol - 1][actualRow] === "D") return true;
          mapObj[actualCol - 1][actualRow] = "*";
          actualCol--;
        }
        break;

      case "down":
        if (
          mapObj[actualCol + 1] !== undefined &&
          mapObj[actualCol + 1][actualRow] !== 1
        ) {
          if (mapObj[actualCol + 1][actualRow] === "D") return true;
          mapObj[actualCol - 1][actualRow] = "*";
          actualCol++;
        }
        break;

      case "left":
        if (
          mapObj[actualCol][actualRow - 1] !== undefined &&
          mapObj[actualCol][actualRow - 1] !== 1
        ) {
          if (mapObj[actualCol][actualRow - 1] === "D") return true;
          mapObj[actualCol][actualRow - 1] = "*";
          actualRow--;
        }
        break;

      case "right":
        if (
          mapObj[actualCol][actualRow + 1] !== undefined &&
          mapObj[actualCol][actualRow + 1] !== 1
        ) {
          if (mapObj[actualCol][actualRow + 1] === "D") return true;
          mapObj[actualCol][actualRow + 1] = "*";
          actualRow++;
        }
        break;
    }
  };

  const propagation = (actualPosition) => {
    let reachedDestination = false;

    while (reachedDestination === false) {
      move("up");
      move("left");
      move("right");
      move("down");
    }
  };

  if (isValid) return false;
  destination();

  for (let i = 0; i < mapObj.length; i++) {}

  console.log(mapObj);
};
