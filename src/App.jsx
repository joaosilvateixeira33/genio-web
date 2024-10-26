import { useState } from "react"
import imgLamp from "./assets/lampada.png"
import showGenio from './assets/mostra-genio.png'

function App() {
  const [lamp, setLamp] = useState(imgLamp);

  const changeImageLamp = () => {
      setLamp(showGenio);
  };

  return (
    <main>
      <h2>&quot;Liberte a magia da programação com a lâmpada de Aladim.&ldquo;</h2>
      <img src={lamp} alt="lampada ilustrativa" />
      <button onClick={changeImageLamp}>Clique Aqui</button>
    </main>
  )
}

export default App
