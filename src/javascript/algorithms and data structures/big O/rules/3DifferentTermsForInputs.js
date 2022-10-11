function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes2.forEach(function (boxes) {
    console.log(boxes);
  });
}

compressBoxesTwice([1, 2, 3], [4, 5, 6]);

// O(a + b)
// Each input is a different term

function compressBoxesTwiceNested(boxes, boxes2) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
    boxes2.forEach(function (boxes) {
      console.log(boxes);
    });
  });
}

compressBoxesTwiceNested([1, 2, 3], [4, 5, 6]);

// O(a * b)