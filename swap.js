'use strict';

var arr = [1, 2, 3, 4];

var temp = arr[1];
arr[1] = arr[3]
arr[3] = temp;


console.log(arr);
