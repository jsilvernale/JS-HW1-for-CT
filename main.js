/* write a function that takes in the string and the list of dog names, loops
through the list and checks that the current name is in the string passed in. 
The output should be:
"matched dog_name" if name is in the string, if no matches are present console.log "no matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ['Max', 'HAS', 'PuRple', 'dog']

function findWords(){
    let matchedDogName = []
    for (let i = 0; i < dog_names.length; i++){
        if (dog_string.includes(dog_names[i])) {
            matchedDogName.push(dog_names[i])
        }else {
            continue;
        }
    }if (matchedDogName.length > 0){
        console.log('Matched dog_name')
    }else {
        console.log('No Matches')
    }
}  

console.log(findWords())


let findTheWords = function(){
    let matchedDogName = []
    for (let i = 0; i < dog_names.length; i++){
        if(dog_string.includes(dog_names[i])) {
            matchedDogName.push(dog_names[i])
        }else {
            continue;
        }
    }if (matchedDogName.length > 0) {
        console.log(matchedDogName)
    }else {
        console.log('no matches')
    }
}

console.log(findTheWords())

// probably best to use this if you DONT need to get index number
let findDogs = () =>{
    let matchedDogName = []
    dog_names.forEach(dog =>{
        if (dog_string.includes(dog)){
            matchedDogName.push(dog)
        }     
    })
    if (matchedDogName.length > 0){
        console.log('Matched dog_name')
    }else{
        console.log('No Matches')
    }
}

console.log(findDogs())

/*write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index"*/

let array = ['Max', 'Baseball', 'Reboot', 'Goku', 'Trucks', 'Rodger']

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if (i %2 == 0){
            arr.splice(i, 1, 'even index')
        } else{
            continue;
        }
    }console.log(arr)
}

console.log(replaceEvens(array))

let replaceEvens1 = function(arr){
    for(let i = 0; i < arr.length; i++){
        if (i %2 == 0){
            arr.splice(i, 1, 'even index')
        } else{
            continue;
        }
    }console.log(arr)
}

console.log(replaceEvens1(array))

let replaceEvens2 = arr =>{
    arr.forEach(a =>{
        if(arr.indexOf(a) %2 == 0){
            arr.splice(arr.indexOf(a), 1, 'even index')
        }
    })
    console.log(arr)
}

console.log(replaceEvens2(array))