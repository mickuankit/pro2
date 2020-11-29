var readlineSync= require('readline-sync')
var chalk = require('chalk')
console.log(chalk.blue("Welcome to the game !!!!!!\n"))
console.log(chalk.yellowBright('This game will be level based \nThere will be 5 question per level if you score 3 out 5 you will go to next level\n'))
console.log(chalk.yellowBright('So lets begin the game !!!'))
var score=0
function play(question,answer,lastQ){
    var ans=readlineSync.question(question)
    if(ans.toLowerCase()==answer){
        console.log(chalk.green("That's correct!!"))
        score++
        if(lastQ!=1){
            console.log(chalk.blue.underline("Current score is "+score))
        }
    }
    else{
        console.log(chalk.red("That's worng !!"))
        console.log("The correct answer is "+answer.toUpperCase())
        if(lastQ!=1){
            console.log(chalk.blue.underline("Current score is "+score))
        }
    }
}
var level1=[{question:"Q 1 - A procedure that calls itself is called \n A - illegal call\n B - reverse polish\n C - recursive\n D - none of the above\n ",answer:"c"},
{question:"Q 2 - push() and pop() functions are found in\nA - queues\nB - lists\nC - stacks\nD - trees\n",answer:"c"},
{question:"Q 3 - Travelling salesman problem is an example of\nA - Dynamic Algorithm\nB - Greedy Algorithm\nC - Recursive Approach\nD - Divide & Conquer\n ",answer:"b"},
{question:"Q 4 - Which of the following searching techniques do not require the data to be in sorted form\nA - Binary Search\nB - Interpolation Search\nC - Linear Search\nD - All of the above\n",answer:"c"},
{question:"Q 5 - After each iteration in bubble sort\nA - at least one element is at its sorted position.\nB - one less comparison is made in the next iteration.\nC - Both A & B are true.\nD - Neither A or B are true.\n ",answer:"a"}]
var level2=[{question:"Q 1 - In context with time-complexity, find the odd out \nA - Deletion from Linked List.\nB - Searching in Hash Table\nC - Adding edge in Adjacency Matrix\nD - Heapify a Binary Heap\n",answer:"d"},
{question:"Q 2 - Linked list search complexity is\nA - Ο(1) \nB - Ο(n) \nC - Ο(log n) \nD - Ο(log log n) \n",answer:"b"},
{question:"Q 3 - In the deletion operation of max heap, the root is replaced by\nA - next available value in the left sub-tree.\nB - next available value in the right sub-tree.\nC - any random value from the heap.\nD - last element of the last level\n",answer:"d"},
{question:"Q 4 - A pivot element to partition unsorted list is used in\nA - Merge Sort\nB - Quick Sort\nC - Insertion Sort\nD - Selection Sort\n",answer:"b"},
{question:"Q 5 - Apriori analysis of an algorithm assumes that −\nA - the algorithm has been tested before in real environment.\nB - all other factors like CPU speed are constant and have no effect on implementation.\nC - the algorithm needs not to be practical.\nD - none of the above.\n",answer:"b"}]

for(var i=0;i<level1.length;i++){
    var current=level1[i]
    play(current.question,current.answer,0)
}
if(score>2){
    console.clear()
    console.log(chalk.yellowBright("Now lets start level2 quiz"))
    for(var i=0;i<level2.length;i++){
        var curr=level2[i]
        var c
        if(i==level2.length-1){
            c=1
        }
        else{
            c=0
        }
        play(curr.question,curr.answer,c)
    }
}
else{
    console.log(chalk.redBright("Your score is less than 3 \n Try again!!!"))

}
console.log("Your Final score is "+chalk.blueBright.bold.underline(score))
