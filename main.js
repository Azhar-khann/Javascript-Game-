const prompt = require('prompt-sync')({sigint: true});


const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// helper function
function getIndexesOfRepeatedElement(arr, targetElement) {
    const indexes = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === targetElement) {
        indexes.push(i);
      }
    }
    
    return indexes;
}

// helper function to remove repeated * and ^
function remove(field){

    let characters = [hole, fieldCharacter];
    const hatIndexes = getIndexesOfRepeatedElement(field,hat)
    const positionIndexes = getIndexesOfRepeatedElement(field,pathCharacter)
    const chosenHat = hatIndexes[ Math.floor(Math.random() * hatIndexes.length) ];
    const chosenPostion = positionIndexes[ Math.floor(Math.random() * positionIndexes.length) ];

    for (let i=0; i <= field.length -1 ; i++){

        if (hatIndexes.includes(i) || positionIndexes.includes(i)) {
            if (i != chosenHat && i != chosenPostion){
                let randomIndex = Math.floor(Math.random() * characters.length);
                let char = characters[randomIndex]
                field[i] = char
            }
        }
    }
    return field
}
//helper function
function singletoMultiple(array,height) {
    let temporarayArray = [];
    let finalArray = []
    for (let i=0; i <= array.length -1 ; i++){
        temporarayArray.push(array[i])
        if ((i+1)%height === 0 && i > 0){
            finalArray.push(temporarayArray)
            temporarayArray = []
        }
    }
    return finalArray
}


class Field {
    constructor(field) {
      this._field = field;
    }

    get field(){
        return this._field
    }
    get print() {
        let field = ''
        for (let i=0; i < this._field.length; i++){
            field += this._field[i].join('') + '\n'
        }
        return field
    }

    static generateField(width,height){
        let field = [];
        let generatedArrays= 0
        let characters = [hat, hole, fieldCharacter, pathCharacter];

        while (generatedArrays < height){
            for (let i=0; i < width; i++){

                let randomIndex = Math.floor(Math.random() * characters.length);  // Generate a random index to access the variables
                field.push(characters[randomIndex])             
            }
            generatedArrays += 1;
        }
        field = remove(field)  // remove repeated * and hats in field array
        field = singletoMultiple(field,height)
        return field
    }
};

//console.log(Field.generateField(4,4))

const myField = new Field([
    ['*', '░', '░'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

const myField2 = new Field(Field.generateField(6,6))


//Helper function

function convertFieldToSingleArray(field){
    let fieldAraay = []
    for (let i=0; i < field.length; i++){
        fieldAraay.push(field[i])
        
    }
    return fieldAraay
}


  

function Play(myField){

    let field = convertFieldToSingleArray(myField.print)

    const hat_index = field.indexOf('^');
    const holeIndexes = getIndexesOfRepeatedElement(field,'O');
    const upIndex =  myField.field[0].length;                     // index of upper element relative to current position
    const downIndex =  myField.field[0].length;                     // index of down element relative to current position
    const rightmostIndexes = getIndexesOfRepeatedElement(field,'\n')

    while (true) {

        if (holeIndexes.includes( field.indexOf('*') ) ){
            return 'You fell into a Hole'
        }
        if (field.includes(undefined) || rightmostIndexes.includes(field.indexOf('*')) ) {
            return 'You went out bound'
        }

        if(field.indexOf('*') === hat_index){
            return 'Congrats, You found your hat'
        }


        console.log(field.join('') )
        let move = prompt('Play your move: ');

        if (move === 'right') {
            let currentPosition = field.indexOf('*')
            field[currentPosition] = field[currentPosition + 1]  // replaces current postion (*) with right elemetn
            field[currentPosition + 1] = '*';                    // and then replace right element with with *
             
        }

        if (move === 'left') {
            let currentPosition = field.indexOf('*')
            field[currentPosition] = field[currentPosition - 1]
            field[currentPosition - 1] = '*';
            
        }

        if (move === 'up') {
            let currentPosition = field.indexOf('*')
            field[currentPosition] = field[currentPosition - (upIndex + 1)]
            field[currentPosition - (upIndex + 1)] = '*';
            
        }
        if (move === 'down') {
            let currentPosition = field.indexOf('*')
            field[currentPosition] = field[currentPosition + downIndex + 1]
            field[currentPosition + downIndex + 1] = '*';
            
        }
      
        
    }
    
}


console.log(Play(myField2))








