

function biggestsSmallerNumber(array) {
    let bigger = array[0];
    let smaller = array[0];

    for (let index = 0; index < array.lenght; index += 1){
        if(array[index] > bigger){
            bigger = array[index];
        }
        if(array[index] < smaller){
            smaller = array[index];
        }
    }
    return `Maior:${bigger}
Menor: ${smaller}`;
}

    
    



console.log(biggestsSmallerNumber([7,1,2,3,6,9,4,5]));
