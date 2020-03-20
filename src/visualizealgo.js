import Data from "./sampledata";
import animateSwap from "./animations";

// or pass data
function visualize(params) {
  let records = params || Data;
  //console.log(records);
  let result = [];
  const len = records.length;
  for (let i = 0; i < len; i++) {
    //console.log(records[i]);
    BubbleSort(records[i], result);
    result.push("yearend");
  }
  return result;
}

function BubbleSort(record, result) {
  let len = record.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (record[j].data < record[j + 1].data) {
        //console.log("swapping " + j + "and " + (j + 1));
        swap(record, j, j + 1);

        //put actual data ids swap data[j].id and data[j+1].id
        result.push([
          [record[j], record[j + 1]],
          [j, j + 1]
        ]);
      }
    }
  }
  //console.log(record);
}

function swap(arr, first_Index, second_Index) {
  let temp = arr[first_Index];
  arr[first_Index] = arr[second_Index];
  arr[second_Index] = temp;
}

export default visualize;
