function change(num){
    num = num + 1
    return num
}
num = 2
//console.log(change(num))

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

function adjustRandomIndex(randomIndex,element){
    let characters = [hat, hole, fieldCharacter, pathCharacter];

    if (element === hat){
        while(randomIndex === 0 ){
            randomIndex = Math.floor(Math.random() * characters.length);
        }
        console.log('random index hat:',randomIndex)
        return randomIndex
    }

    if (element === pathCharacter){
        while(randomIndex === 3 || randomIndex === 0 ){
            randomIndex = Math.floor(Math.random() * characters.length);
        }
        console.log('random index path',randomIndex)
        return randomIndex
    }
    
}

let randomIndex = 0
adjustRandomIndex(randomIndex,hat)
console.log(randomIndex)