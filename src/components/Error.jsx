import useCotizador from "../hooks/useCotizador"

export default function Error() {

    const { error } = useCotizador();

    return (
        <>
            {error && <p className="bg-red-500 text-white p-3 text-center my-5">{error}</p>}
        </>
    )
}
