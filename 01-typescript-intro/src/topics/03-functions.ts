

function addNumbers(a: number, b:number ):number{
    return a + b;
}

const addNumbersArrow = (a: number, b:number) => {
    return a + b;
}

const addNumbersArrowString = (a: number, b:number):string => {
    return `${a + b}`; //Fn + Esc = ``
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2):number{
    return firstNumber + base;
}

interface Character{
    name:string;
    hp:number;

    showHp: () => void; //Definicion de metodo en interface
}

const healCharacter = (character: Character, amount:number) => {
    
    character.hp += amount;

}


const strider : Character = {
    name : "Strider",
    hp: 50,
    showHp(){
        console.log(`Puntos de fvida ${this.hp}`);
    }
}


addNumbers(1,2)
addNumbersArrow(1,2)
addNumbersArrowString(1,2)
multiply(1);
healCharacter(strider,10);






export {};