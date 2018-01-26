// Quiz 2

//1. Name and describe the two main operations of a stack (to add and remove data).
// A. LIFO The Last item added Into the stack will be the First one taken Out of the stack.
// Stack uses the push method to add an item to the back of the storage and uses the
// pop to remove the last item added into the storage.

//2. Name and describe the two main operations of a queue (to add and remove data).
// A. FIFO The First item added Into the queue will be the First one taken Out of the queue.
// Queue uses the enqueue method to add to the tail and push an item into the storage. The
// dequeue method is used to add to to the head and remove the first item added.

//3. Draw the tree resulting from adding the following sequence of numbers to an empty
// tree: 30, 45, 15, 10, 50, 40, 20, 27
// A.
//----------30---------
//-----15--------45----
//--10---20----40----50
//---------27----------


//4. Is this tree balanced? If not, which rotation needs to be done? (Use the following
//     rotation as an example: rightRotation(30), or leftRotation(10))
// A. The tree is balanced


//5. Now add 29. Is the tree balanced? If not, which rotation needs to be done?
// (Use the following rotation as an example: rightRotation(30), or leftRotation(10))
// A. Yes, it needs a rotation
//----------30---------
//-----15--------45----
//--10---20----40----50
//---------27----------
//-----------29 <--

//6. Consider the following tree:    
//  ------5  
//  ---2-----8  
//  -1--3-----
//-0---  

//  Now add 0 to the tree. Which one is the first node to go out of balance?

//7. How do you fix this node? (Use the following rotation as an example: rightRotation(30),
// or leftRotation(10))

//8. What are the four main steps of mergesort?
/*A.
0. Recognize base case
1. Divide: break problem down during each call
2. Conquer: do work on each subset
3. Combine: solutions
 */

/*9. Say you have a program which handles the login queue to a game server. The game server is
 able to log in one person every one second. Assume that one second must elapse after a person
  logs in with an empty queue before they are removed from the queue. Draw the state of the
   queue at 12:00:06, considering the following sequence of events:
    1. At 12:00:00 Hades logs in                Hades logs in at 12:01
    2. At 12:00:00 Ares logs in                 Ares logs in at 12:02+1
    3. At 12:00:00 Zeus logs in                 Zeus logs in at 12:03+2
    4. At 12:00:00 Buzz Light Year logs in      Buzz logs in at 12:04+3
    5. At 12:00:02 Kanye West logs in           Kanye logs in at 12:05+4
    6. At 12:00:03 Taylor Swift logs in         Taylor logs in at 12:06+6
    7. At 12:00:03 Darkwing Duck logs in        Darkwing logs in at 12:07+7 
    8. At 12:00:04 Evil Mickey logs in.         Evil logs in at 12:08+8
    */
/* A. Hades logs in at 12:01
      Ares logs in at 12:02
      Zeus logs in at 12:03
      Buzz logs in at 12:04
      Kanye logs in at 12:05
      Taylor logs in at 12:06
      Darkwing is waiting to dequeue and logs in at 12:07
      Evil Mickey is waiting to enqueue and logs in at 12:08
 */

/*10. Solve https://www.hackerrank.com/challenges/compare-the-triplets - be mindful that you
 are required to print the output to the console in exactly the format that was asked. You
  are not required to return a value, just print to the console. Also be mindful to use 
  JavaScript.*/
// A. 
function solve(a0, a1, a2, b0, b1, b2){
    let a = 0;
    let b = 0;
    let aArr = [];
    let bArr = [];
    aArr.push(a0, a1, a2);
    bArr.push(b0, b1, b2);
    for(var i = 0; i < 3; i++){
        if(aArr[i] > bArr[i]){
            a++;
        }
        if(bArr[i] > aArr[i]){
            b++;
        }
    }
    console.log(a + " " + b);
}


/*11. Solve https://www.hackerrank.com/challenges/mini-max-sum - be mindful that you are 
required to print the output to the console in exactly the format that was asked. You are 
not required to return a value, just print to the console. Also be mindful to use JavaScript.*/
function miniMaxSum(arr) {
    arr.sort();
    let sum = 0;
    for(let i = 0; i < arr.length; i ++){
        sum+= arr[i];
    }
    console.log(`${sum - arr[arr.length-1]} ${sum - arr[0]}`) ;    
}
