interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author:string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration:36,
    song:"Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}



//Desestructurar!
//Nombre de atributo de objeto - nombre de la constante
const {
    song:anotherSong, 
    songDuration:duration,
    details:detailsAuthor
} = audioPlayer;

const {
    author:nameAuthor
} = detailsAuthor;

console.log(`Desestructuracion de objetos`);
console.log(`Cancion : ${anotherSong}`);
console.log(`Duracion : ${duration}`);
console.log(`Nombre de author : ${nameAuthor}`);

console.log(`Desestructuracion de arreglos`);
//const [p1, p2, p3]: string[] = ['Goku','Vegeta','Trunks'];

//Como no me interesa ni goku ni vegeta, podemos ignorarlos poniendo ","
//p3 = 'Not found' Es un valor por defecto en caso de que no este Trunks
const [, , p3 = 'Not found']: string[] = ['Goku','Vegeta','Trunks'];

console.log(`Personaje 3: ${p3}`);


export {};
