//start configuration
document.getElementById("operatorsInTask").value = "3";
document.getElementById("lengthOfNumbers").value = "1";
document.getElementById("task").value = generateRandomTask();

/**
 * validates the given result: changes the element with the response tag
 */
function validate(){
    let task = document.getElementById("task").value;
    let givenResult = document.getElementById("result").value;

    let response; 
    if(givenResult){
        response = Validator.validate(task,givenResult);
    }
    else response = "input an answer"
    document.getElementById("response").innerHTML = response;
}

/**
 * generates a task using the cnotent configuration input tags
 * @returns random tast
 */
function generateRandomTask(){
    let numberofCalulationOperators = document.getElementById("operatorsInTask").value;
    let maxLengthOfNumber = document.getElementById("lengthOfNumbers").value;
    
    let randomTask="";
    let operators= [..."+-*/"]

    randomTask+= getRandomNumber(maxLengthOfNumber);
    for(let i=0; i<numberofCalulationOperators; i++){
        //-0.01 so that it is nevre out of bounds even though the possibility is almost 0 
        let operatorIndex= Math.floor(Math.random()*(operators.length));
        randomTask+= operators[operatorIndex];
        randomTask+= getRandomNumber(maxLengthOfNumber);
    }
    return randomTask;
}

function getRandomNumber(maxLengthOfNumber){
    return  Math.round(Math.random()*Math.pow(10, maxLengthOfNumber));
}

/**
 * generates and displays a new task
 */
function displayNewTask(){
    document.getElementById("task").value = generateRandomTask();
}


