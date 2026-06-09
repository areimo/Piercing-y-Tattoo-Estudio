import { useState } from 'react'
import './App.css'
import AgendaForm from './components/AgendaForm'
import TatuajeForm from './components/TatuajeForm'
import PiercingForm from './components/PiercingForm';
import CaravanaForm from './components/CaravanaForm';
import WppContact from './WppContact';
import IGContact from './IG';

function App() {
  const [activeForm, setActiveForm] = useState("agenda");

  return (
    <>
      <section id="logo" className="logo">
        <img src="/src/assets/logo.png" alt="logo" />
      </section>

      <section className="main-content">
        <section className="datebuttons">
          <div className="buttons">
            <button id="agendarcita" onClick={() => setActiveForm("agenda")}>
              Agendar Cita
            </button>
            <button id="tatuajes" onClick={() => setActiveForm("tatuaje")}>
              Tatuajes
            </button>
            <button id="piercings" onClick={() => setActiveForm("piercing")}>
              Piercings
            </button>
            <button id="caravanas" onClick={() => setActiveForm("caravana")}>
              Caravanas
            </button>
          </div>
        </section>

        {/* Esta sección actúa como el contenedor blanco con borde negro de 700x700 */}
        <section className="form">
          {activeForm === "agenda" && <AgendaForm />}
          {activeForm === "tatuaje" && <TatuajeForm />}
          {activeForm === "piercing" && <PiercingForm />}
          {activeForm === "caravana" && <CaravanaForm />}
        </section>
      </section>

      {/* Contenedor de las redes sociales */}
      <section className="contact">
        <WppContact />
        <IGContact />
      </section>

      <section className="author">
        <p id="areimo">2026 @areimo on Github</p>
      </section>
    </>
  );
}

export default App;