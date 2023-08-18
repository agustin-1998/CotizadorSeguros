import { MARCAS, YEARS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

export default function Formulario() {

    // useCotizador es un custom hook que devuelve de forma simplificada el contexto para no tener que andar haciendo useContext en todos lados, solo llamamos a useCotizador y ya tenemos el contexto
    const { handleChangeDatos, datos, setError, cotizarSeguro } = useCotizador();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(Object.values(datos).includes('')) {
            setError('Todos los campos son obligatorios');  
            return;
        } else {
            setError('');
        }
    }


    return (
        <>
            <Error />
            <form onSubmit={handleSubmit}>   
                <div className="my-5">
                    <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">
                        <span className="text-gray-400">Marca</span>
                        <select name="marca" id="marca" className="w-full p-3 bg-white border border-gray-200 mt-1" onChange={e => handleChangeDatos(e)} value={datos.marca}>
                            <option value="">--Seleccionar Marca--</option>
                            {
                                MARCAS.map((marca) => (
                                    <option key={marca.id} value={marca.name}>{marca.name}</option>
                                ))
                            }
                        </select>
                    </label>
                </div>
                <div className="my-5">
                    <label htmlFor="year" className="block mb-3 font-bold text-gray-400 uppercase">
                        <span className="text-gray-400">Año</span>
                        <select name="year" id="year" className="w-full p-3 bg-white border border-gray-200 mt-1" onChange={e => handleChangeDatos(e)} value={datos.year}>
                            <option value="">--Selecciona Año--</option>
                            {
                                YEARS.map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))
                            }
                        </select>
                    </label>
                </div>
                <div className="my-5">
                    <label htmlFor="plan" className="block mb-3 font-bold text-gray-400 uppercase">
                        <span className="text-gray-400">Elige un Plan</span>
                        <div className="flex gap-3 items-center mt-2">
                            {
                                PLANES.map((plan) => (
                                    <>
                                        <label htmlFor="">
                                            {plan.name}
                                        </label>
                                        <input type="radio" name="plan" id="plan" value={plan.id} key={plan.id} onChange={e => handleChangeDatos(e)}/>
                                    </>
                                ))
                            }
                        </div>
                    </label>
                </div>
                <input type="submit" value="cotizar" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 font-bold uppercase" />
            </form>
        </>
    )
}
