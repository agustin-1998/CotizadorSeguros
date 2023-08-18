export const MARCAS = [
    { id: 1, name: 'Europeo' },
    { id: 2, name: 'Asiatico' },
    { id: 3, name: 'Americano' },
];

const YEARMAX = new Date().getFullYear();
//from convierte un string a un arreglo
export const YEARS = Array.from(new Array(20), (v, i) => YEARMAX - i);

export const PLANES = [
    { id: 1, name: 'Básico'},
    { id: 2, name: 'Completo'},
]
