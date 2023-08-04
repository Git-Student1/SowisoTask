class Validator{
    /**
     * evaluates the string values into a number
     * @param {String} expression 
     * @returns function that evaluates the string
     */
     static  #evaluate(expression){
        return new Function('return ' + expression)();
    } 
    /**
     * validates if the given result is correct for the task
     * @param {String} task 
     * @param {String} givenResult 
     * @returns string that tells you if you where right and, in case you were wrong, the correct answer
     */
    static validate(task, givenResult){
        let correctResult =this.#evaluate(task) 
        if(Math.round(correctResult*100)/100=== Math.round( Number(givenResult)*100)/100 ){
            return "correct!";
        }
        else return `false, the right answer is: ${correctResult}`;
    }
}