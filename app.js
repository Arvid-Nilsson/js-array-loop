//uppgift 1
const array1 = [69, 420, "nice", "kebab"]

function printArray(list){
    for (let i = 0; i < list.length; i++){
        console.log(list[i])
    }
}

printArray(array1)


//uppgift 2
const farger = ["blå", "röd", "gul", "grön", "lila"]

function printFarger(){
    for(let farg of farger){
        console.log(farg)
    }
}

printFarger()