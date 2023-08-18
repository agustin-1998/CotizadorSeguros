import useCotizador from "../hooks/useCotizador"
import { PLANES, MARCAS } from "../constants/index"
import { useCallback, useRef } from "react";

// useMemo: memoriza el valor de una variable, para que no se vuelva a ejecutar es parecido a useMemo, en este caso se puede usar tambien
// useCallback: memoriza una función, para que no se vuelva a ejecutar

// useRef, useCallback y useMemo son hooks que nos permiten optimizar el código, para que no se vuelva a ejecutar una función o una variable, si no cambia el valor de la variable o la función

export default function Resultado() {

    const { resultado, datos } = useCotizador();
    const { marca, year, plan } = datos;
    //congelamos el valor de year, para que no se vuelva a ejecutar
    const yearRef = useRef(year);

    // useCallback en este caso lo que hace es guardar en memoria el resultado de la función, si no cambia resultado, no se vuelve a ejecutar
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const [nombrePlan] = useCallback(
        PLANES.filter(p => p.id === Number(plan)), 
    [resultado]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const [nombreMarca] = useCallback(
        MARCAS.filter(m => m.name == marca),
    [resultado]);

    // useRef: crea una variable mutable que persiste durante toda la vida del componente, es decir, no se vuelve a ejecutar cuando se renderiza el componente

    
    if(resultado === 0) return null;

    return (
        <>
            <div className="bg-gray-100 text-center mt-5 p-5 shadow">
                <h2 className="text-2xl font-bold text-gray-600">Resumen</h2>

                <p className="my-2">
                    <span className="font-bold text-gray-800">Marca: </span> {nombreMarca.name}
                </p>

                <p className="my-2">
                    {/* current es una clave del objeto ref que guarda el valor de year */}
                    <span className="font-bold text-gray-800">Año del Auto: </span> {yearRef.current}
                </p>

                <p className="my-2">
                    <span className="font-bold text-gray-800">Plan: </span> {nombrePlan.name}
                </p>

                <p className="my-2 text-2xl">
                    <span className="font-bold text-gray-800">Total: </span> $ {resultado}
                </p>
            </div>
        </>
    )
}
