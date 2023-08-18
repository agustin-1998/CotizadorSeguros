export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
    let incremento;

    switch (marca) {
        case 'Europeo':
            incremento = 1.30;
            break;

        case 'Americano':
            incremento = 1.15;
            break;

        case 'Asiatico':
            incremento = 1.05;
            break;

        default:
            break;
    }
    return incremento;
}

export function obtenerPlan(plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}

export function formatearMoneda(monto) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(monto);
}