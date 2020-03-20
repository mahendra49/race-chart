const numbers = [
  [9, 52, 62, 68, 78, 139, 141, 153, 178, 190],
  [5, 13, 38, 85, 91, 93, 104, 110, 199, 200],
  [61, 65, 76, 82, 105, 113, 136, 146, 152, 170],
  [23, 73, 82, 98, 111, 113, 140, 161, 182, 186],
  [8, 36, 47, 51, 58, 122, 130, 158, 173, 191],
  [10, 19, 40, 68, 72, 77, 107, 108, 113, 146],
  [58, 84, 104, 115, 116, 124, 135, 138, 141, 170],
  [32, 40, 72, 86, 93, 163, 167, 174, 175, 176],
  [38, 56, 64, 70, 107, 151, 156, 167, 173, 191],
  [4, 53, 62, 66, 71, 125, 136, 161, 185, 194]
];

const data = [
  [
    {
      data: 59,
      name: "a",
      id: 0
    },
    {
      data: 90,
      name: "b",
      id: 1
    },
    {
      data: 44,
      name: "c",
      id: 2
    },
    {
      data: 8,
      name: "d",
      id: 3
    },
    {
      data: 76,
      name: "e",
      id: 4
    },
    {
      data: 32,
      name: "f",
      id: 5
    },
    {
      data: 7,
      name: "g",
      id: 6
    },
    {
      data: 40,
      name: "h",
      id: 7
    },
    {
      data: 87,
      name: "i",
      id: 8
    },
    {
      data: 43,
      name: "j",
      id: 9
    }
  ],
  [
    {
      data: 39,
      name: "a",
      id: 0
    },
    {
      data: 46,
      name: "b",
      id: 1
    },
    {
      data: 54,
      name: "c",
      id: 2
    },
    {
      data: 4,
      name: "d",
      id: 3
    },
    {
      data: 42,
      name: "e",
      id: 4
    },
    {
      data: 27,
      name: "f",
      id: 5
    },
    {
      data: 36,
      name: "g",
      id: 6
    },
    {
      data: 12,
      name: "h",
      id: 7
    },
    {
      data: 45,
      name: "i",
      id: 8
    },
    {
      data: 68,
      name: "j",
      id: 9
    }
  ],
  [
    {
      data: 78,
      name: "a",
      id: 0
    },
    {
      data: 20,
      name: "b",
      id: 1
    },
    {
      data: 10,
      name: "c",
      id: 2
    },
    {
      data: 31,
      name: "d",
      id: 3
    },
    {
      data: 19,
      name: "e",
      id: 4
    },
    {
      data: 45,
      name: "f",
      id: 5
    },
    {
      data: 90,
      name: "g",
      id: 6
    },
    {
      data: 49,
      name: "h",
      id: 7
    },
    {
      data: 81,
      name: "i",
      id: 8
    },
    {
      data: 87,
      name: "j",
      id: 9
    }
  ],
  [
    {
      data: 60,
      name: "a",
      id: 0
    },
    {
      data: 73,
      name: "b",
      id: 1
    },
    {
      data: 83,
      name: "c",
      id: 2
    },
    {
      data: 35,
      name: "d",
      id: 3
    },
    {
      data: 24,
      name: "e",
      id: 4
    },
    {
      data: 4,
      name: "f",
      id: 5
    },
    {
      data: 7,
      name: "g",
      id: 6
    },
    {
      data: 44,
      name: "h",
      id: 7
    },
    {
      data: 72,
      name: "i",
      id: 8
    },
    {
      data: 89,
      name: "j",
      id: 9
    }
  ],
  [
    {
      data: 21,
      name: "a",
      id: 0
    },
    {
      data: 39,
      name: "b",
      id: 1
    },
    {
      data: 16,
      name: "c",
      id: 2
    },
    {
      data: 43,
      name: "d",
      id: 3
    },
    {
      data: 66,
      name: "e",
      id: 4
    },
    {
      data: 73,
      name: "f",
      id: 5
    },
    {
      data: 18,
      name: "g",
      id: 6
    },
    {
      data: 37,
      name: "h",
      id: 7
    },
    {
      data: 57,
      name: "i",
      id: 8
    },
    {
      data: 59,
      name: "j",
      id: 9
    }
  ],
  [
    {
      data: 33,
      name: "a",
      id: 0
    },
    {
      data: 83,
      name: "b",
      id: 1
    },
    {
      data: 48,
      name: "c",
      id: 2
    },
    {
      data: 57,
      name: "d",
      id: 3
    },
    {
      data: 97,
      name: "e",
      id: 4
    },
    {
      data: 79,
      name: "f",
      id: 5
    },
    {
      data: 75,
      name: "g",
      id: 6
    },
    {
      data: 44,
      name: "h",
      id: 7
    },
    {
      data: 88,
      name: "i",
      id: 8
    },
    {
      data: 85,
      name: "j",
      id: 9
    }
  ]
];

/* for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    console.log(data[i][j].data);
  }
} */

const colors = [];
for (let i = 0; i < 10; i++) {
  colors.push(getRandomColor());
}

console.log(colors);

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 10; j++) {
    //console.log(data[i][j].name);
    data[i][j].data = numbers[j][i];
    data[i][j].color = colors[j];
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

console.log(data);

export default data;
/* 
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    data[i][j] = { ...data[i][j], id: j };
  }
} */
