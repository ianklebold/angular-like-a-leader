export interface Passenger{
    name: string;
    children?:string[];
}


const passenger1: Passenger = {
    name: 'Ian',
}

const passenger2: Passenger = {
    name: 'Ian',
    children: ['Hijo1','Hijo2']
}

const printChilden = (passenger1: Passenger) => {
    const howManyChilden = passenger1.children?.length || 0;
    //const howManyChilden = passenger1.children!.length;


    console.log(howManyChilden);
}

printChilden(passenger2);