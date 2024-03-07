export interface Product {
    description : string;
    price : number;
}

const phone : Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet : Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}


//En lugar de devolver un number[] arreglo de numeros
//Devuelvo un arreglo de dos numeros [number,number]
export function taxCalculation(options: TaxCalculationOptions): [number,number]{
    
    //Desestructurar objeto
    const {tax, products} = options;

    let total = 0;

    //Aplico desestructuracion a nivel de funcion lambda
    //En lugar de product | ({price}) //Coloco lo que necesito
    products.forEach( ({ price }) => {
        total += price;
    });

    

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total,totalTax] = taxCalculation({
    products : shoppingCart,
    // tax: tax esta linea es lo mismo que lo de abajo
    // cuando tenemos mismo nombre de variable y el valor podemos simplificarlo
    tax,
});

console.log('Total',total);
console.log('Tax',totalTax);



export {};