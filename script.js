

// const box1 = document.querySelector(".box1");
// const box = document.querySelector("#box");
// const img = document.createElement("img");
// img.src = "https://i.pinimg.com/564x/5a/b7/5d/5ab75d998e80aec1a8657f823ddd6d01.jpg";
// img.alt = "nice pictures";
// box.append(img);
// img.width = 400;
// img.height = 400;

// box1.addEventListener("click", (e) => {

//     if(e.target.matches("#box1")) {
//         e.target.removeAttribute("id");
//     }
//     else{
//         e.target.setAttribute("id", "box1");
//     }
// });


// console.log(document.body)




// 1
// function primeNumber(num) {
//     for(let i = 2; i <num; i++) {
//         if(num % i ===0) {
//             return false;
//         }
//     }
//     return num > 1;
// }
// function getPrimes(num) {
//     const primes = [];
//     for(let i = 2; i <= num; i++){
//         if(primeNumber(i)){
//             primes.push(i)
//         }
//     }
//     return primes
// }
// console.log(primeNumber(3));
// console.log(getPrimes(59));



// 2
// function findVowels(str) {
//     let count = 0;
//     const vowels = ["a", "e", "i", "o", "u"];

//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(findVowels("hello world"));



// const arr = [5, 5, 3, 0, 3, 7, 7, 9, 0];
// let returnUniq = function(nums) {
//     for(i = 0; i < nums.length; i++){
//         if(nums[i] === nums[i-1]){
//             nums.splice(i, 1);
//             i--;
//         }
//     }
//     return nums.length;
// }
// console.log(returnUniq(arr));
// console.log(arr);


// function findAverage(array) {
//     let sum = 0
//     for(i = 0; i < array.length; i++){
//       sum += array[i];
//     }
//     return  sum / array.length
//   }
//   console.log(findAverage([4,5,9]))


// factorial

// function factorial (n){
//     if (n === 0)
//     return 1;
//     else{
//         return factorial(n - 1)*n;
//     }
// }
// console.log(factorial(5));


// // fibonacci

// function fibonacci(num){
//     if(num < 2)
//     return num;
//     else return fibonacci(num-1) + fibonacci(num-2);
// }
// console.log(fibonacci(6));


// function while1(i){
//     if(i <= 0){
//         return;
//     }
//     console.log("hello");
//     return while1(i-1);
// }
// while1(3);



// let board = [
//     ["_", "_", "_"],
//     ["_", "_", "_"],
//     ["_", "_", "_"],
// ];
// let player = "x"

// while(true){
//     let boardStr = (board[0].join("  ") + 
//         "\n" + 
//         board[1].join("  ") + 
//         "\n" + 
//         board[2].join("  "));

// let row = +prompt("Please provide the value for the row\n\n"+boardStr);

// let column = +prompt("Please provide the value for the column\n\n"+boardStr);
// if(board[row][column] !== "_"){
//     alert( "Not a legal move, you lose");
//     break;
// }

// board[row][column] = player;

// if(player === "x"){
//     player = "0";
// }else{
//     player = "x";
// }

// }









let stringifyBoard = function(board) {
	return board[0].join("   ") + 
       "\n" + 
       board[1].join("   ") +
       "\n" +
       board[2].join("   ");
};

let didWeWin = function(board, player) {

  
  if(board[0][0] === player && board[0][1] === player && board[0][2] === player) {
    return true;
  }
  
  if(board[1][0] === player && board[1][1] === player && board[1][2] === player) {
    return true;
  }
  
  if(board[2][0] === player && board[2][1] === player && board[2][2] === player) {
    return true;
  }
  

  
  if(board[0][0] === player && board[1][0] === player && board[2][0] === player) {
    return true;
  }
  
  if(board[0][1] === player && board[1][1] === player && board[2][1] === player) {
    return true;
  }
  
  if(board[0][2] === player && board[1][2] === player && board[2][2] === player) {
    return true;
  }
  
  
  if(board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  
  if(board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }
  
  return false;
};

let isFull = function(board) {
  let i = 0;
  while(i < board.length) {
    const row = board[i];
    
    let i2 = 0;
    while(i2 < row.length) {
      if(row[i2] === "_") {
         return false;
      }
      i2 = i2 + 1;
    }
    i = i + 1;
  }
  
  return true;
};


let board = [
  [ "_", "_", "_" ],
  [ "_", "_", "_" ],
  [ "_", "_", "_" ]
];

let player = "x";

while(true) {
  let boardStr = stringifyBoard(board);
     
  let row = +prompt("Dear user, please provider the value for the row \n\n"+boardStr);
  let column = +prompt("Dear user, please provider the value for the column \n\n"+boardStr);
  
  if(board[row][column] !== "_") {
    alert("Not a legal move, you lose!");
    break;
  }
  
  board[row][column] = player;
  
  
  const won = didWeWin(board, player);
  
  if(won) {
    alert("Player " + player +" won the game!");
    break;
  }
  
  if(isFull(board)) {
    alert("The board is full, nobody won");
    break;
  }
  
  
  if(player === "x") {
    player = "o";
  } else {
    player = "x";
  }
}
     