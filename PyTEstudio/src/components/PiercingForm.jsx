import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function PiercingForm() {
  // Estado para controlar si es menor o mayor de edad
  const [esMenor, setEsMenor] = useState(false);
  
  // Configuración de Formspree (reemplaza con tu ID correspondiente)
  const [state, handleSubmit] = useForm("xzdqgbnv");

  // Si el formulario se envía con éxito, muestra este mensaje limpio
  if (state.succeeded) {
    return (
      <div className="success-container">
        <p className="success-msg">¡Formulario de Piercing enviado con éxito!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario de Piercing</h2>

      {/* SELECCIÓN DE EDAD */}
      <fieldset>
        <legend>Tipo de Cliente</legend>
        <label className="radio-label">
          <input 
            type="radio" 
            name="tipoCliente" 
            checked={!esMenor} 
            onChange={() => setEsMenor(false)} 
            value="Mayor de edad"
          />
          Mayor de edad
        </label>
        <label className="radio-label">
          <input 
            type="radio" 
            name="tipoCliente" 
            checked={esMenor} 
            onChange={() => setEsMenor(true)} 
            value="Menor de edad"
          />
          Menor de edad
        </label>
      </fieldset>

      {/* DATOS DEL CLIENTE / MENOR */}
      <fieldset>
        <legend>{esMenor ? 'Datos del Menor' : 'Datos del Cliente'}</legend>

        <label>
          Fecha del registro
          <input type="date" name="fechaRegistro" required />
        </label>

        <label>
          Nombre completo
          <input type="text" name="nombre" required />
        </label>

        <label>
          Documento de Identidad
          <input type="text" name="documento" required />
        </label>

        <label>
          Fecha de Nacimiento
          <input type="date" name="fechaNacimiento" required />
        </label>

        {esMenor ? (
          <>
            <label>
              Edad
              <input type="number" name="edad" required />
            </label>
            <label>
              Domicilio
              <input type="text" name="domicilio" required />
            </label>
          </>
        ) : (
          <label>
            Núm. de Teléfono o Celular
            <input type="tel" name="telefono" required />
          </label>
        )}
      </fieldset>

      {/* DATOS DEL ADULTO RESPONSABLE (SOLO MENORES) */}
      {esMenor && (
        <fieldset>
          <legend>Datos del Adulto Responsable</legend>
          
          <label>
            Nombre completo del adulto
            <input type="text" name="nombreAdulto" required />
          </label>

          <label>
            Documento de Identidad (C.I.)
            <input type="text" name="documentoAdulto" required />
          </label>

          <label>
            Vínculo con el menor (madre/padre/tutor legal)
            <input type="text" name="vinculoAdulto" required />
          </label>
        </fieldset>
      )}

      {/* DATOS DEL PIERCING */}
      <fieldset>
        <legend>Datos del Piercing</legend>

        <label>
          Zona a perforar
          <input type="text" name="zonaPerforar" required />
        </label>

        <label>¿Adquiriste la Joya en el Estudio?</label>
        <label className="radio-label">
          <input type="radio" name="joyaEstudio" value="Sí" /> Sí
        </label>
        <label className="radio-label">
          <input type="radio" name="joyaEstudio" value="No" /> No
        </label>

        <label>Material de la Joya</label>
        <label className="radio-label">
          <input type="radio" name="materialJoya" value="Acero Quirúrgico" /> Acero Quirúrgico
        </label>
        <label className="radio-label">
          <input type="radio" name="materialJoya" value="Titanio" /> Titanio
        </label>
      </fieldset>

      {/* INFORMACIÓN MÉDICA */}
      <fieldset>
        <legend>{esMenor ? 'Información Médica del Menor' : 'Información Médica Relevante'}</legend>

        <label>
          ¿Alergia a metales?
          <textarea rows="2" name="alergiaMetales" placeholder="Especificar si aplica..." />
        </label>

        <label>
          ¿Enfermedades (diabetes, hepatitis, etc)?
          <textarea rows="2" name="enfermedades" placeholder="Especificar si aplica..." />
        </label>

        <label>
          ¿Toma medicamentos actualmente?
          <textarea rows="2" name="medicamentos" placeholder="¿Cuál/(es)?" />
        </label>

        <label className="checkbox-label">
          <input type="checkbox" name="embarazadaLactando" value="Sí" />
          ¿Está embarazada o lactando?
        </label>

        <label className="checkbox-label">
          <input type="checkbox" name="problemasPrevios" value="Sí" />
          ¿Tuvo problemas previos con piercings o cicatrización?
        </label>
      </fieldset>

      {/* CONSENTIMIENTO INFORMADO */}
      <fieldset>
        <legend>Consentimiento Informado</legend>

        <label className="checkbox-label">
          <input type="checkbox" required />
          Declaro que he sido informado/a sobre los riesgos del procedimiento (infección, sangrado, allergy, cicatrización, rechazo de la pieza, formación de queloide, etc).
        </label>

        {!esMenor && (
          <label className="checkbox-label">
            <input type="checkbox" required />
            Confirmo que soy mayor de edad.
          </label>
        )}

        <label className="checkbox-label">
          <input type="checkbox" required />
          {esMenor 
            ? 'Me comprometo a seguir las recomendaciones de cuidado posteriores y autorizo de forma libre y voluntaria la colocación del piercing bajo mi responsabilidad.' 
            : 'Me comprometo a seguir las recomendaciones de cuidado posteriores.'
          }
        </label>

        <label className="checkbox-label">
          <input type="checkbox" required />
          Entiendo que una vez montada la mesa de trabajo el dinero que aboné no tiene devolución.
        </label>
      </fieldset>

      {/* FIRMAS DIGITALES */}
      <fieldset>
        <legend>Firmas</legend>
        
        {esMenor ? (
          <>
            <label>
              Firma adulto responsable (Aclaración / Nombre completo)
              <input type="text" name="firmaAdulto" placeholder="Nombre completo del adulto" required />
            </label>

            <label>
              Firma menor (Aclaración / Nombre completo)
              <input type="text" name="firmaMenor" placeholder="Nombre completo del menor" required />
            </label>
            
            <p style={{ fontSize: '13px', color: '#666', marginTop: '10px', lineHeight: '1.4' }}>
              <strong>Nota:</strong> Este documento tiene validez únicamente para autorizar el procedimiento de colocación del/los piercing mencionado/s y no sustituye la presencia o responsabilidad legal del adulto firmante.
            </p>
          </>
        ) : (
          <label>
            Firma cliente (Aclaración / Nombre completo)
            <input type="text" name="firmaCliente" placeholder="Tal como figura en el documento" required />
          </label>
        )}
      </fieldset>

      {/* Gestión de errores de envío */}
      <ValidationError prefix="Error" errors={state.errors} />

      <button type="submit" className="submit-btn" disabled={state.submitting}>
        {state.submitting ? "Enviando..." : "Enviar Formulario"}
      </button>
    </form>
  );
}

export default PiercingForm;