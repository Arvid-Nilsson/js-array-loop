const numbers = [69, 420, 1337];

function sumNum(numbers){
    let sum = 0;

    for(let number of numbers){
        sum += number;
    }
    
    return sum;
}

console.log(sumNum(numbers))