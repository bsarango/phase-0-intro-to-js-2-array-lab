// Write your solution here!
const cats= ["Milo" , "Otis" , "Garfield"]; //create array 'cats' with names

function destructivelyAppendCat(){  //create funct 'destructivelyAppendCat() with no arguemnt needed
    cats.push("Ralph");             //push 'Ralp' to end of array
}

function destructivelyPrependCat(){ //create func 'destructivelyPrependCat()
    cats.unshift("Bob");            //add 'Bob' to beginning of array
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(catCopy){
    catCopy=[...cats,"Broom"];
    return catCopy;
}

function prependCat(catCopy){
    catCopy=["Arnold",...cats];
    return catCopy;
}

function removeLastCat(){
    return cats.slice(0,-1);
}

function removeFirstCat(){
    return cats.slice(1);
}