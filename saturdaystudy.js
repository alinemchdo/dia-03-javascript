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
