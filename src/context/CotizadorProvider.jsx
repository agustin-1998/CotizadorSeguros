import { createContext, useState } from "react";
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan, formatearMoneda } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [resultado, setResultado] = useState(0);
    const [error, setError] = useState('');
    const [cargando, setCargando] = useState(false);

    const handleChangeDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }

    const cotizarSeguro = () => {
        // una base
        let resultado = 2000;
        
        // obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year);

        // Hay que restarle el 3% por cada año de diferencia
        resultado -= ((diferencia * 3) * resultado) / 100;
        
        // Americano 15%
        // Asiatico 5%
        // Europeo 30%
        resultado *= calcularMarca(datos.marca);

        // Basico aumenta 20%
        // Completo 50%
        resultado *= obtenerPlan(datos.plan);
        
        //formatear a 2 decimales
        resultado = formatearMoneda(resultado);

        setCargando(true);
        setTimeout(() => {
            setResultado(resultado);
            setCargando(false);
        }, 1000);
            
    }

    // State del Context, el provider es quien provee los datos a los componentes, los children son los componentes que se van a renderizar
    return (
        <CotizadorContext.Provider 
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando,
            }}
        >
            {children}
        </CotizadorContext.Provider>
    );
};

export { CotizadorProvider };

export default CotizadorContext;
