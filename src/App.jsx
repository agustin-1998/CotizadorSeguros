import AppSeguro from "./components/AppSeguro"
import { CotizadorProvider } from "./context/CotizadorProvider"

function App() {

  return (
    <>
      {/* el cotizador provider debe encerrar a la app ya que se va a mandar los datos a todos los hijos */}
      <CotizadorProvider >
        <AppSeguro />
      </CotizadorProvider>
    </>
  )
}

export default App
