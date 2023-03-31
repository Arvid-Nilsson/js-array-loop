const farger = ["blå", "röd", "gul", "grön", "lila"];

function printFarger(){
    for(let farg of farger){

        let index = farger.indexOf(farg);
    
        console.log(`${index}: ${farg}`);

    }
}

printFarger()