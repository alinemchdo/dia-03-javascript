let number = [];

for (index = 0; index <= 25; index +=1){
    number.push(index);
}

console.log(number);

for(index = 0; index < number.length; index += 1){
    console.log(number[index]/2);
}

let word = 'amor';
let wordErrada = '';

for (let index = 0; index < word.length; index +=1) {
    wordErrada += word[word.length -1 - index];
    
}
console.log(wordErrada);