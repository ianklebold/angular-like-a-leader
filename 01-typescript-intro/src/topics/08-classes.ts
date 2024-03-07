export class Person{
    public name: string;
    private address: string;


    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    }

}

// export class Hero extends  Person{
//     public alterEgo: string;
//     private age: number;
//
//     constructor(public alterEgo: string, public age: number, public realName: string) {
//
//         super(realName, 'New York');
//
//         this.realName = realName;
//         this.age = age;
//     }
// }

export class Hero{
    //public person: Person; No es necesario al definirlo en el constructor

    constructor(public alterEgo: string, public age: number, public realName: string, public person:Person) {
        this.person = person;

    }
}

const person = new Person('Ian Fernandez','NY');
const spiderman = new Hero('SpiderMan',24,'Ian',person);