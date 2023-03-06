function solveMeFirst(num1, num2){
    return num1 + num2

};


console.log(solveMeFirst(7,3));

console.log(solveMeFirst(10,123));


function simpleArraySum(array){

    let sum = 0;

    for (let index = 0; index < array.lenght; index += 1){
        sum += array[index];
    }
    return sum;


}

console.log(simpleArraySum([1,2,3,10.55]));

const longestWord = frase => {
    let paravraMaior = frase.split(' ');
    let array = ' o ';
    let result ;
    for (let index of paravraMaior){
        if (paravraMaior.length > array.length){
            array = index;
            result = array
            

        }
    }
    return result

}

console.log(longestWord('Antorio foi ao banheiro e não sabemos o que aconteceu'));
